FROM python:3.11-buster AS builder

RUN pip install poetry==1.4.2

ENV POETRY_NO_INTERACTION=1 \
	POETRY_VIRTUALENVS_IN_PROJECT=1 \
	POETRY_VIRTUALENVS_CREATE=1 \
	POETRY_CACHE_DIR=/tmp/poetry_cache

WORKDIR /app

COPY pyproject.toml poetry.lock ./
RUN --mount=type=cache,target=$POETRY_CACHE_DIR poetry install --without dev --no-root


FROM python:3.11-slim-buster AS runtime

RUN useradd -m nonroot
USER nonroot

ENV VIRTUAL_ENV=/app/.venv \
	PATH="/app/.venv/bin:$PATH"

COPY --from=builder --chown=nonroot:nonroot /app/.venv /app/.venv

COPY --chown=nonroot:nonroot searching-svc ./searching-svc

WORKDIR /app/searching-svc

ENTRYPOINT ["python", "-m", "searching-svc.main"]
