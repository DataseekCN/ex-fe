# ex-fe

[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)

> installation 

## Build Setup 本地安装步骤

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

Testing Notes:

Routes: 
/ home page
/dashboard <- 用户同步总结模块
/connections <- 同步连接界面（含oauth认证和授权功能，连接设置）

/dashboard component calls Etsy.com API directly, allow CORS on your browser to test.
