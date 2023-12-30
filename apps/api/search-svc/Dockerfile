FROM python:3.9-slim-bullseye

RUN addgroup --system appgroup && adduser --system --group appuser

WORKDIR /search_svc

COPY pyproject.toml poetry.lock /search_svc/
RUN pip3 install poetry
RUN poetry config virtualenvs.create false \
	&& poetry install --no-interaction --no-ansi
COPY main.py /search_svc/
COPY core/ /search_svc/core
COPY grpc/ /search_svc/grpc
COPY proto/ /search_svc/proto
COPY services/ /search_svc/services
RUN chown -R appuser:appgroup /search_svc
USER appuser

CMD ["python3", "app.py"]
