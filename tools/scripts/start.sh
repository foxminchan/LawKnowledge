#!/bin/bash

echo "Starting the website"

npx nx serve website

echo "Starting the node api"

npx nx serve api-gateway
npx nx serve api-law-svc
npx nx serve api-auth-svc

echo "Starting the python api"

npx nx build search-svc
python3 search-svc/main.py

npx nx build chat-svc
python3 chat-svc/main.py