#
# Copyright (c) 2023-present Hutech University. All rights reserved
# Licensed under the MIT License
#

import os
from dotenv import load_dotenv
from pydantic_settings import BaseSettings

load_dotenv()

ENV: str = ""


class Configs(BaseSettings):
    URL: str = os.getenv("URL")
    PORT: str = os.getenv("PORT")
    INDEX_NAME: str = os.getenv("INDEX_NAME")
    DATABASE_URL: str = os.getenv("DATABASE_URL")

    class Config:
        case_sensitive = True


configs = Configs()
