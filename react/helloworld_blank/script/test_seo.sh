#!/usr/bin/env bash

set -ex

rm -rf ~/_workspace/seo-playlist/docker-ionic-seo-tryout/public

cp -r ~/_workspace/ionic-playlist/react/helloworld_blank/build \
  ~/_workspace/seo-playlist/docker-ionic-seo-tryout/public
