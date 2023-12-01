import os
from typing import List

from dotenv import load_dotenv
from pydantic import BaseSettings

load_dotenv()

ENV: str = ""


class Configs(BaseSettings):
    API: str = "/api"
    API_V1_STR: str = "/api/v1"
    BACKEND_CORS_ORIGINS: List[str] = ["*"]
    PROJECT_NAME: str = "searching_svc"
    PROJECT_ROOT: str = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

    DB_URL: str = os.getenv("DB_URL")
    DB_PORT: str = os.getenv("DB_PORT")
    OPEN_AI_API_KEY: str = os.getenv("OPEN_AI_API_KEY")

    class Config:
        case_sensitive = True


configs = Configs()
