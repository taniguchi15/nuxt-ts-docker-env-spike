FROM node:14.17

RUN apt-get update

WORKDIR /app
ADD ./package.json /app
RUN yarn install

ENV HOST 0.0.0.0
ENV PORT 3000
