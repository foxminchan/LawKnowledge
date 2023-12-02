FROM ubuntu:20.04

# Create a non-root user
RUN useradd -m nonroot

WORKDIR /app

COPY main.py .
COPY utils/ utils/

RUN chown -R nonroot:nonroot /app

USER nonroot

RUN apt-get update \
	&& apt-get install -y python3.9 python3.9-dev \
	&& apt-get clean \
	&& rm -rf /var/lib/apt/lists/*

RUN curl -sSL https://install.python-poetry.org | python3.9 -

RUN poetry install

CMD ["poetry", "run", "python", "main.py"]