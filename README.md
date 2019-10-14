# ex-fe

[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)
[![Build Status](https://travis-ci.org/DataseekCN/ex-fe.svg?branch=master)](https://travis-ci.org/DataseekCN/ex-fe)
[![codebeat badge](https://codebeat.co/badges/a41e5ee1-f69b-491c-aef9-7340b9e751e8)](https://codebeat.co/projects/github-com-dataseekcn-ex-fe-master)

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


