FROM ubuntu:20.04
RUN apt-get update \
	&& apt-get install -y python3.9 python3.9-dev \
	&& apt-get clean \
	&& rm -rf /var/lib/apt/lists/*
COPY . .
RUN  install poetry && poetry install
CMD ["poetry", "run", "python", "main.py"]