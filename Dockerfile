FROM node:16.14.2-alpine3.15

ENV LANG=C.UTF-8 \
	TZ=Asia/Tokyo

RUN apk update && \
	apk upgrade

WORKDIR /my-blog

