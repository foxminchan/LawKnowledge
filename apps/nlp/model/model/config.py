import os
from dotenv import load_dotenv
from pydantic import BaseSettings

load_dotenv()

ENV: str = ""


class Configs(BaseSettings):
    MODEL: str = os.getenv("MODEL")
    PATH: str = os.getenv("PATH")
    DATASET: str = os.getenv("DATASET")

    class Config:
        case_sensitive = True


configs = Configs()
