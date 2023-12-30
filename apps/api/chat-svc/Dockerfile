FROM python:3.9-slim-bullseye

RUN addgroup --system appgroup && adduser --system --group appuser

WORKDIR /search_svc

COPY pyproject.toml poetry.lock /chat_svc/
RUN pip3 install poetry
RUN poetry config virtualenvs.create false \
	&& poetry install --no-interaction --no-ansi
COPY main.py /chat_svc/
COPY vector.db /chat_svc/
COPY core/ /chat_svc/core
COPY grpc/ /chat_svc/grpc
COPY proto/ /chat_svc/proto
COPY prisma/ /chat_svc/prisma
COPY services/ /chat_svc/services
RUN chown -R appuser:appgroup /search_svc
USER appuser

CMD ["python3", "app.py"]
