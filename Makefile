include .env
export

gchr-login:
	docker login ${DOCKER_REGISTRY} -u ${DOCKER_USERNAME} -p ${DOCKER_PASSWORD}
.PHONY: gchr-login

build-image:
	docker build -f apps/api/api-gateway/Dockerfile . --tag ${DOCKER_REGISTRY}/${DOCKER_USERNAME}/api-gateway:latest
	docker build -f apps/api/auth-svc/Dockerfile . --tag ${DOCKER_REGISTRY}/${DOCKER_USERNAME}/auth-svc:latest
	docker build -f apps/api/law-svc/Dockerfile . --tag ${DOCKER_REGISTRY}/${DOCKER_USERNAME}/law-svc:latest
	docker build -f apps/api/search-svc/Dockerfile . --tag ${DOCKER_REGISTRY}/${DOCKER_USERNAME}/search-svc:latest
	docker build -f apps/api/website/Dockerfile . --tag ${DOCKER_REGISTRY}/${DOCKER_USERNAME}/website:latest
.PHONY: build-image

push-image:
	docker push ${DOCKER_REGISTRY}/${DOCKER_USERNAME}/api-gateway:latest
	docker push ${DOCKER_REGISTRY}/${DOCKER_USERNAME}/auth-svc:latest
	docker push ${DOCKER_REGISTRY}/${DOCKER_USERNAME}/law-svc:latest
	docker push ${DOCKER_REGISTRY}/${DOCKER_USERNAME}/search-svc:latest
	docker push ${DOCKER_REGISTRY}/${DOCKER_USERNAME}/website:latest
.PHONY: push-image