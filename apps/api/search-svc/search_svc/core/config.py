import os
from typing import List

from dotenv import load_dotenv
from pydantic import BaseSettings

load_dotenv()

ENV: str = ""


class Configs(BaseSettings):
    URL: str = os.getenv("URL")
    PORT: str = os.getenv("PORT")

    class Config:
        case_sensitive = True


configs = Configs()
