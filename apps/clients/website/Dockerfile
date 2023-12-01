FROM docker.io/nginx:stable-alpine

RUN addgroup -S nonroot && adduser -S nonroot -G nonroot
USER nonroot

COPY  dist/apps/website/* /usr/share/nginx/html/
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
