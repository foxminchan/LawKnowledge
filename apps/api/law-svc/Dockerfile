FROM docker.io/node:lts-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /usr/src/app
COPY dist/apps/api-law-svc/package*.json ./
RUN npm install --only=production --ignore-scripts

FROM docker.io/node:lts-alpine AS runner
RUN apk add --no-cache dumb-init
ENV NODE_ENV production
ENV PORT 3000
WORKDIR /usr/src/app
COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY --from=deps /usr/src/app/package.json ./package.json
COPY dist/apps/api-law-svc .
RUN chown -R node:node .
USER node
EXPOSE 3000
CMD ["dumb-init", "node", "main.js"]
