#!/bin/bash

echo "Navigate to Schema folder"

cd ../../apps/api

echo "Init prisma schema and generate prisma client Auth service"

cd auth-svc && npx prisma init

echo "Init prisma schema and generate prisma client Law service"

cd ../law-svc && npx prisma init

echo "Init prisma schema and generate prisma client Chat service"

cd ../chat-svc && npx prisma init