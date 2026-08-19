from fastapi import FastAPI
from routers import basketball_router

app = FastAPI(title="NextRun Detection API")

app.include_router(basketball_router.router)