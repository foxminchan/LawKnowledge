FROM tiangolo/uvicorn-gunicorn-fastapi:python3.10

WORKDIR /app/

RUN curl -sSL https://install.python-poetry.org | POETRY_HOME=/opt/poetry python && \
	cd /usr/local/bin && \
	ln -s /opt/poetry/bin/poetry && \
	poetry config virtualenvs.create false

COPY ./app/pyproject.toml ./app/poetry.lock* /app/

ARG INSTALL_DEV=false
RUN bash -c "if [ $INSTALL_DEV == 'true' ] ; then poetry install --no-root ; else poetry install --no-root --only main ; fi"

ARG INSTALL_JUPYTER=false
RUN bash -c "if [ $INSTALL_JUPYTER == 'true' ] ; then pip install jupyterlab ; fi"

COPY ./app /app
ENV PYTHONPATH=/app