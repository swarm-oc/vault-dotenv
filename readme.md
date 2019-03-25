<h1 align="center" style="border-bottom: none;">vault-dotenv</h1>
<h3 align="center">Creates a .env file from vault secrets</h3>
<p align="center">
  <a href="https://www.codacy.com/app/swarm-oc/vault-dotenv?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=swarm-oc/vault-dotenv&amp;utm_campaign=Badge_Grade">
    <img alt="Travis" src="https://api.codacy.com/project/badge/Grade/98589ef370624f1fbca8bebb5435f7e1">
  </a>
  <a href="https://travis-ci.org/beogip/vault-dotenv">
    <img alt="Travis" src="https://img.shields.io/travis/beogip/vault-dotenv/master.svg">
  </a>
  <a href="https://github.com/semantic-release/semantic-release">
    <img alt="semantic-release" src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg">
  </a>
  <a href="https://www.npmjs.com/package/vault-dotenv">
    <img alt="npm latest version" src="https://img.shields.io/npm/v/vault-dotenv/latest.svg">
  </a>
  <a href="https://greenkeeper.io/">
    <img alt="npm latest version" src="https://badges.greenkeeper.io/beogip/vault-dotenv.svg">
  </a>
</p>

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
	-a ADDRESS, -address ADDRESS        Vault server address, if no address is
                                            given tries to get the address from
                                            the env var VAULT_ADDR.
                                            Default: http://127.0.0.1
	-t TOKEN, -token TOKEN              Authentication token of Vault. if no address is
                                            given tries to get the address from
                                            the env var VAULT_TOKEN.
	-f, -force                          Override the current .env file
```
