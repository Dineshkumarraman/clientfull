FROM node:8.2.0-alpine
RUN mkdir -p /usr/src/temp
COPY . /usr/src/temp/
WORKDIR /usr/src/temp
RUN npm install
