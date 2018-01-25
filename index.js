#!/usr/bin/env node

const argv = require('minimist')(process.argv.slice(2))
const fs = require('fs')
const vault = require('node-vault')
const snakeCase = require('lodash.snakecase')
const appDir = process.cwd()

const vaultAddress = argv.a || argv.address || process.env.VAULT_ADDR
const vaultToken = argv.t || argv.token || process.env.VAULT_TOKEN
const force = argv.f || argv.force
let scope = argv.s || argv.scope || ''

if (scope) scope = `/${scope}`

async function getEnvString (vaultClient) {
  const secrets = await vaultClient.list(`secret${scope}`, {format: 'json'})
  const {keys} = secrets.data
  let output = ''
  for (let key of keys) {
    const read = await vaultClient.read(`secret${scope}/${key}`)
    const {value} = read.data
    output += `${snakeCase(key).toUpperCase()}=${value}\n`
  }

  return output
}

function generateDotEnv (output) {
  return new Promise((resolve, reject) => {
    fs.writeFile(`${appDir}/.env`, output, (err) => {
      if (err) return reject(err)
      return resolve()
    })
  })
}

function existsDotEnv () {
  return new Promise((resolve, reject) => {
    fs.access(`${appDir}/.env`, (err) => {
      resolve(!err)
    })
  })
}

module.export = (async function () {
  if (!force && (await existsDotEnv())) {
    throw new Error('File exists: .env already exists use -f to override')
  }
  const vaultClient = vault({
    endpoint: vaultAddress,
    token: vaultToken
  })
  const output = await getEnvString(vaultClient)
  await generateDotEnv(output)
  console.log('File .env successfully created')
})().catch(e => console.error(e.message))
