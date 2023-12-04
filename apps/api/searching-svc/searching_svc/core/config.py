import os
from typing import List

from dotenv import load_dotenv
from pydantic import BaseSettings

load_dotenv()

ENV: str = ""


class Configs(BaseSettings):
    OPEN_AI_API_KEY: str = os.getenv("OPEN_AI_API_KEY")

    class Config:
        case_sensitive = True


configs = Configs()
