FROM node:lts-alpine3.15 AS BUILD

WORKDIR /app

COPY ./package.json /app/
COPY ./tsconfig.json /app/

# install dependencies
RUN yarn

COPY ./public /app/public
COPY ./src /app/src

RUN yarn build

# build in /app/build

FROM nginx:1.20.2 as PROD

COPY ./nginx.conf /etc/nginx/nginx.conf

COPY --from=BUILD /app/build/. /usr/share/nginx/html
