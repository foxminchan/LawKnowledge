import os
from typing import List

from dotenv import load_dotenv
from pydantic import BaseSettings

load_dotenv()

ENV: str = ""


class Configs(BaseSettings):
    API: str = "/api"
    BACKEND_CORS_ORIGINS: List[str] = ["*"]
    PROJECT_NAME: str = "searching_svc"
    PROJECT_ROOT: str = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

    class Config:
        case_sensitive = True


configs = Configs()
