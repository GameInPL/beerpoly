#!/bin/sh
set -e

# prepare config
cat > /etc/nginx/conf.d/default.conf << EndOfConfig
# Nginx Proxy config
access_log  /dev/stdout;
error_log   /dev/stderr error;

server {
  listen               443 ssl;
  ssl_certificate      /certs/fullchain.pem;
  ssl_certificate_key  /certs/privkey.pem;
  ssl_protocols        TLSv1 TLSv1.1 TLSv1.2;
  ssl_ciphers          HIGH:!aNULL:!MD5;

  root /app/dist;
  index index.html;

  location / {
    try_files $uri $uri/ =404;
  }
}

EndOfConfig

# run nginx proxy
nginx -g "daemon off;"
