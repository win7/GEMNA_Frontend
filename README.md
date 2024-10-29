# GEMNA Frontend
Based on Scutum Admin Template (Vue.js version with Nuxt)

## Install requirements (Ubuntu/Linux Mint)
``` bash
# install requirements
$ apt install build-essential checkinstall libssl-dev

# installs nvm (Node Version Manager)
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash

# download and install Node.js (you may need to restart the terminal)
$ nvm install 14

# verifies the right Node.js version is in the environment
$ node -v # should print `v14.21.3`

# verifies the right npm version is in the environment
$ npm -v # should print `6.14.18`

# install yarn
$ npm install -g yarn

# verifies the right yarn version is in the environment
$ yarn -v # should print `v1.22.22`
```

## Quick Setup
``` bash
# install dependencies
$ yarn sc-setup

# serve with hot reload at 192.168.1.188:3103
$ yarn sc-dev

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn run build
$ yarn start

# generate static project
$ yarn run generate
```
