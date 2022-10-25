FROM node:14.20-alpine as build-step

RUN mkdir -p /app

WORKDIR /app

COPY package.json /app

COPY . .

RUN npm install
RUN npm run build --prod

FROM nginx:1.21.3-alpine

COPY --from=build-step /app/dist/split-au-front /usr/share/nginx/html

