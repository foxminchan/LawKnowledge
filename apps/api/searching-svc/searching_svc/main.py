from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware

from searching_svc.api.routes import api_router
from searching_svc.core.config import configs


app = FastAPI(
            title=configs.PROJECT_NAME,
            openapi_url=f"{configs.API}/openapi.json",
            version="1.0.0",
            license_info={'name': 'MIT', 'url': 'https://opensource.org/licenses/MIT'},
        )

if configs.BACKEND_CORS_ORIGINS:
    app.add_middleware(
      CORSMiddleware,
      allow_origins=[str(origin) for origin in configs.BACKEND_CORS_ORIGINS],
      allow_credentials=True,
      allow_methods=["*"],
      allow_headers=["*"],
    )

app.include_router(api_router, prefix=configs.API_V1_STR)


@app.get("/")
async def root():
    return {"message": "Service is running"}
