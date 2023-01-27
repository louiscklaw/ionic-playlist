#!/usr/bin/env bash

set -ex

rm -rf yarn.lock
# rm -rf node_modules/*

# npm install @material-ui/core
# npm install @material-ui/icons

yarn 

yarn start
