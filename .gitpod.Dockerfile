FROM gitpod/workspace-full-vnc:2023-11-24-15-04-57

RUN sudo apt-get update \
	&& sudo apt-get upgrade -y \