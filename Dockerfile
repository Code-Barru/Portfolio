FROM node:alpine as builder

WORKDIR /build

COPY package.json  /build/package.json

RUN npm install

COPY . /build

RUN npm run build

FROM httpd:alpine
COPY --from=builder /build/build /usr/local/apache2/htdocs/