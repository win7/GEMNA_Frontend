# GEMNA Frontend
Based on Scutum Admin Template (Vue.js version with Nuxt)

## Install requirements (Ubuntu/Linux Mint)
``` bash
# install requirements (these requirements are needed to install Node.JS)
$ apt install build-essential checkinstall libssl-dev
```

``` bash
# installs nvm (Node Version Manager)
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash
```
output:

![Alt text](/setup_img/install_nvm.png)

``` bash
# download and install Node.js (you may need to restart the terminal)
$ nvm install 14
```
output:

![Alt text](/setup_img/install_node_14.png)

``` bash
# verifies the right Node.js version is in the environment
$ node -v # should print `v14.21.3`
```
output:

![Alt text](/setup_img/node_version.png)

``` bash
# verifies the right npm version is in the environment
$ npm -v # should print `6.14.18`
```
output:

![Alt text](/setup_img/npm_version.png)

``` bash
# install yarn
$ npm install -g yarn
```
output:

![Alt text](/setup_img/install_yarn.png)

``` bash
# verifies the right yarn version is in the environment
$ yarn -v # should print `v1.22.22`
```
output:

![Alt text](/setup_img/yarn_version.png)

## Quick Setup
``` bash
# clone repository
$ git clone https://github.com/win7/GEMNA_Frontend.git
```

output:

![Alt text](/setup_img/clone_frontend.png)

``` bash
# install dependencies
$ yarn sc-setup
```
output:

![Alt text](/setup_img/yarn_setup.png)

``` bash
# serve with hot reload at localhost:3000
$ yarn dev
```
output:

![Alt text](/setup_img/run_nuxt.png)