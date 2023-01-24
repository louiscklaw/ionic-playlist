#!/usr/bin/env bash

rm -rf photo-gallery

set -ex

ionic start photo-gallery tabs --type=react --capacitor

cd photo-gallery
  npm install @capacitor/camera @capacitor/preferences @capacitor/filesystem

  # PWA Elements​
  npm install @ionic/pwa-elements
