# CREDIT: https://github.com/shren207/nextjs-docker-compose
# Dockerfile
FROM node:18-buster

RUN apt update -qyy && \
  apt install -qyy entr wget curl

RUN mkdir -p /app/node_modules

# RUN npm install -g @ionic/cli
# RUN npm install -g @ionic/cli@6.20.0 native-run cordova-res

RUN chown node:node -R /app

WORKDIR /app
