#!/usr/bin/env bash

set -ex

npm install @capacitor/android

npx cap add android
npx cap open android
