include .env
export

run_applications:
	echo "Running backend"
	cd deploys/docker && docker-compose -f docker-compose.yml up -d

.PHONY: run_applications

run_observability:
	echo "Running observability"
	cd deploys/observability && docker-compose -f docker-compose.o11y.yml up -d

.PHONY: run_observability