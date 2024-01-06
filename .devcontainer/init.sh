#!/bin/bash

sudo apt-get update -y
sudo apt-get upgrade -y

if ! [ -x "$(command -v node)" ]; then
	echo "Installing nodejs and npm..."
	sudo apt-get install -y nodejs npm
fi

if ! [ -x "$(command -v pulumi)" ]; then
	echo "Installing pulumi..."
	sudo apt-get install -y pulumi
fi

if ! [ -x "$(command -v docker)" ]; then
	echo "Installing docker..."
	sudo apt-get install -y docker.io
fi

if ! [ -x "$(command -v docker-compose)" ]; then
	echo "Installing docker-compose..."
	sudo apt-get install -y docker-compose
fi

echo "Installing dependencies..."

npm install --force

echo "Building nx workspace..."

NX_BRANCH=main npx nx run-many -t build --all --parallel --maxParallel=3