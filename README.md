<h1 align="center" style="border-bottom: none;">vault-dotenv</h1>
<h3 align="center">Creates a .env file from vault secrets</h3>
<p align="center">
  <a href="https://travis-ci.org/beogip/vault-dotenv">
    <img alt="Travis" src="https://img.shields.io/travis/beogip/vault-dotenv/master.svg">
  </a>
  <a href="https://github.com/semantic-release/semantic-release">
    <img alt="semantic-release" src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg">
  </a>
  <a href="https://www.npmjs.com/package/vault-dotenv">
    <img alt="npm latest version" src="https://img.shields.io/npm/v/vault-dotenv/latest.svg">
  </a>
</p>

## Install
```bash
npm install -g vault-dotenv
```

## Usage
Open a terminal and cd to a directory where you want to create the file

```bash
vault-dotenv -a http://127.0.0.1:8200 -t <token>
```

```bash
Usage: vault-dotenv [options]

Options:
	-a ADDRESS, -address ADDRESS        Vault server address, if no address is
                                            given tries to get the address from
                                            the env var VAULT_ADDR.
                                            Default: http://127.0.0.1
	-t TOKEN, -token TOKEN              Authentication token of Vault
	-f, -force                          Override the current .env file
```
