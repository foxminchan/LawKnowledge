from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware

from searching_svc.core.config import configs
from searching_svc.core.container import Container
from searching_svc.utils.class_object import singleton


@singleton
class AppCreator:
    def __init__(self):
        self.app = FastAPI(
            title=configs.PROJECT_NAME,
            openapi_url=f"{configs.API}/openapi.json",
            version="1.0.0",
            license_info={'name': 'MIT', 'url': 'https://opensource.org/licenses/MIT'},
        )

        self.container = Container()
        self.db = self.container.db()

        if configs.BACKEND_CORS_ORIGINS:
            self.app.add_middleware(
                CORSMiddleware,
                allow_origins=[str(origin) for origin in configs.BACKEND_CORS_ORIGINS],
                allow_credentials=True,
                allow_methods=["*"],
                allow_headers=["*"],
            )

        @self.app.get("/")
        def root():
            return "service is working"


app_creator = AppCreator()
app = app_creator.app
db = app_creator.db
container = app_creator.container
