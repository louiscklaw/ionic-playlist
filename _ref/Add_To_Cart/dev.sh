#!/usr/bin/env bash

set -ex

npm i 

# ionic serve

npx browserslist@latest --update-db

npm run start
