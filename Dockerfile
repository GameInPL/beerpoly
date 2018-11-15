FROM node:8-alpine
EXPOSE 443
USER 0

# make image
WORKDIR /app
COPY . .
RUN rm docker-compose.yaml ||:
RUN rm -rf node_modules && rm -rf dist && rm -rf .git
RUN find /app/docker -type f -name '*.sh' -exec sed -i -e 's/\r//' {} \;
RUN chmod +x /app/docker/custom-entrypoint.sh

# dependecies
RUN apk --no-cache add --virtual native-deps \
  g++ gcc libgcc libstdc++ linux-headers make python && \
  npm install --quiet node-gyp -g &&\
  npm install --quiet && \
  apk del native-deps

# build
RUN npm i
RUN npm run build-dev

# nginx
RUN apk update && apk add nginx
RUN adduser -D -g 'www' www
RUN chown -R www:www /app

ENTRYPOINT ["/app/docker/custom-entrypoint.sh"]
CMD []
