# Copyright (c) 2023-present Hutech University. All rights reserved
# Licensed under the MIT License

import os
from dotenv import load_dotenv
from pydantic_settings import BaseSettings


load_dotenv()

ENV: str = ""


class Configs(BaseSettings):
    QA_MODEL: str = os.getenv("QA_MODEL")
    SUMMARY_MODEL: str = os.getenv("SUMMARY_MODEL")
    GENERATE_MODEL: str = os.getenv("GENERATE_MODEL")
    PATH: str = os.getenv("PATH")
    DATASET: str = os.getenv("DATASET")

    class Config:
        case_sensitive = True


configs = Configs()
