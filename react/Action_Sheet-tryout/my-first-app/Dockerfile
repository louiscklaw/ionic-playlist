# CREDIT: https://github.com/shren207/nextjs-docker-compose
# Dockerfile
FROM node:18-buster

RUN apt update -qyy && \
  apt install -qyy entr wget curl

RUN mkdir -p /app/node_modules

RUN npm install -g @ionic/cli native-run cordova-res
# RUN npm install -g @ionic/cli@6.20.0 native-run cordova-res

RUN chown node:node -R /app

# RUN mkdir -p /usr/lib/node_modules
# RUN chown node:node -R /usr/lib/node_modules
# RUN chown node:node -R /usr/local/lib/node_modules
# RUN chmod 777 -R /usr/lib
# RUN chmod 777 -R /usr/local/lib

WORKDIR /app
