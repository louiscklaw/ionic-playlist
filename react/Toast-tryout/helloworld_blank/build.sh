#!/usr/bin/env bash

set -ex


npm run build

npx cap sync

