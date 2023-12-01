from fastapi import APIRouter

routers = APIRouter()
router_list = []

for router in router_list:
    routers.include_router(router)