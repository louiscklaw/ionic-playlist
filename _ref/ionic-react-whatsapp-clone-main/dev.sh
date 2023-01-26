#!/usr/bin/env bash

set -ex

npx browserslist@latest --update-db

npm install 

# ionic serve
npm run start
