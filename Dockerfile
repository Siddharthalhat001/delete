FROM node:14.17.0-stretch-slim as build

RUN  apt-get update &&  apt-get install -y yarn && apt-get install -y curl

RUN mkdir /MA-frontend

WORKDIR /MA-frontend

COPY package.json yarn.lock ./

RUN yarn install --network-timeout 1000000

COPY . .

RUN yarn build


FROM nginx:1.16.1
## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

## From 'builder' stage copy over the artifacts (/MA-frontend/build) to default nginx public folder
COPY --from=build /MA-frontend/build/ /usr/share/nginx/html

## Copy our default nginx config
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

RUN apt update && apt install nano curl -y

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]