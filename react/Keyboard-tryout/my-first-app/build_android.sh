#!/usr/bin/env bash

set -ex


npx ionic build

npx ionic cap copy

npx ionic cap open android
# ionic cap sync

# sudo mkdir -p /usr/local/android-studio/bin
# sudo touch /usr/local/android-studio/bin/studio.sh
# sudo vim /usr/local/android-studio/bin/studio.sh
# sudo chmod +x /usr/local/android-studio/bin/studio.sh
