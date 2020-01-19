# vault-dotenv
[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors)

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/98589ef370624f1fbca8bebb5435f7e1)](https://www.codacy.com/app/swarm-oc/vault-dotenv?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=swarm-oc/vault-dotenv&amp;utm_campaign=Badge_Grade)
[![Build Status](https://travis-ci.com/swarm-oc/vault-dotenv.svg?branch=master)](https://travis-ci.com/swarm-oc/vault-dotenv)
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
        --kvv2                               Uses key-value 2 vault api
```

## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table><tr><td align="center"><a href="https://github.com/MaanuVazquez"><img src="https://avatars2.githubusercontent.com/u/12692648?v=4" width="100px;" alt="Emmanuel Vazquez"/><br /><sub><b>Emmanuel Vazquez</b></sub></a><br /><a href="#maintenance-MaanuVazquez" title="Maintenance">🚧</a> <a href="#review-MaanuVazquez" title="Reviewed Pull Requests">👀</a> <a href="https://github.com/swarm-oc/vault-dotenv/commits?author=MaanuVazquez" title="Documentation">📖</a></td><td align="center"><a href="https://github.com/beogip"><img src="https://avatars2.githubusercontent.com/u/1965274?v=4" width="100px;" alt="Juan Ignacio Gipponi"/><br /><sub><b>Juan Ignacio Gipponi</b></sub></a><br /><a href="https://github.com/swarm-oc/vault-dotenv/commits?author=beogip" title="Code">💻</a> <a href="#maintenance-beogip" title="Maintenance">🚧</a> <a href="#review-beogip" title="Reviewed Pull Requests">👀</a> <a href="#ideas-beogip" title="Ideas, Planning, & Feedback">🤔</a></td></tr></table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
