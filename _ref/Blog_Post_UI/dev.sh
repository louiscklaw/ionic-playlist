#!/usr/bin/env bash

set -ex


npx browserslist@latest --update-db
npm i 

# ionic serve
npm run start
