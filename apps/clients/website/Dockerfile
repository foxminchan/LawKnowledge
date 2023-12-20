FROM nginx:stable-alpine
RUN addgroup -S nginxgroup && adduser -S nginxuser -G nginxgroup
COPY dist/apps/website/* /usr/share/nginx/html/
COPY nginx/nginx.conf /etc/nginx/nginx.conf
RUN chown -R nginxuser:nginxgroup /usr/share/nginx/html
USER nginxuser
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
