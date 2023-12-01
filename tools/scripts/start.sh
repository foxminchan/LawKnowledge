#!/bin/bash

echo "Starting the website"

npx nx serve website

echo "Starting the api"

npx nx serve api-gateway
npx nx serve api-law-svc
npx nx serve api-auth-svc
npx nx serve api-chat-svc
unicorn main:app --reload