FROM mcr.microsoft.com/devcontainers/base:jammy

RUN sudo apt-get update \
	curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip" \
	&& unzip awscliv2.zip \
	&& ./aws/install \
	&& rm -rf awscliv2.zip aws \
	&& sudo apt-get autoremove -y && sudo apt-get clean -y