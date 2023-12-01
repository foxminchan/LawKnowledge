from fastapi import APIRouter

api_router = APIRouter()
router_list = []

for router in router_list:
    api_router .include_router(router)
