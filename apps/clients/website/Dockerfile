FROM docker.io/nginx:stable-alpine
COPY  dist/apps/website/* /usr/share/nginx/html/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
