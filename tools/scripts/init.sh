#!/bin/bash

echo "Install all dependencies"

pnpm i

echo "Install all poetry dependencies"

pnpm exec nx run nlp-models:install

pnpm exec nx run api-searching-svc:install

echo "Init prisma schema and generate prisma client Auth service"

npx nx prisma-generate auth-svc

echo "Init prisma schema and generate prisma client Law service"

npx nx prisma-generate law-svc

echo "Init prisma schema and generate prisma client Chat service"

npx nx prisma-generate chat-svc