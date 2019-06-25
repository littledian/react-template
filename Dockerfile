FROM nginx:1.15.6

MAINTAINER littledian 1197434548@qq.com

COPY build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
