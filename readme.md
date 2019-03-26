# vault-dotenv

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/98589ef370624f1fbca8bebb5435f7e1)](https://www.codacy.com/app/swarm-oc/vault-dotenv?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=swarm-oc/vault-dotenv&amp;utm_campaign=Badge_Grade)
[![Build Status](https://travis-ci.org/swarm-oc/vault-dotenv.svg?branch=master)](https://travis-ci.org/swarm-oc/vault-dotenv)
[![Npm last version](https://img.shields.io/npm/v/vault-dotenv/latest.svg)](https://www.npmjs.com/package/vault-dotenv)

Creates a .env file from vault secrets

## Install

```bash
npm install -g vault-dotenv
```

## Usage

Open a terminal and cd to a directory where you want to create the file

```
vault-dotenv -a http://127.0.0.1:8200 -t <token>
```

```
Usage: vault-dotenv [options]

Options:
	-a ADDRESS, --address ADDRESS        Vault server address, if no address is
                                            given tries to get the address from
                                            the env var VAULT_ADDR.
                                            Default: http://127.0.0.1
	-t TOKEN, --token TOKEN              Authentication token of Vault. if no address is
                                            given tries to get the address from
                                            the env var VAULT_TOKEN.
	-f, --force                          Override the current .env file
```
