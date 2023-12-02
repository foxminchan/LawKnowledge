import os
from typing import List

from dotenv import load_dotenv
from pydantic import BaseSettings

load_dotenv()

ENV: str = ""


class Configs(BaseSettings):
    DB_URL: str = os.getenv("DB_URL")
    DB_API_KEY: str = os.getenv("DB_API_KEY")
    OPEN_AI_API_KEY: str = os.getenv("OPEN_AI_API_KEY")

    class Config:
        case_sensitive = True


configs = Configs()
