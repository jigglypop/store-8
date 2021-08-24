from fastapi import FastAPI
from recommend import get_recommend
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

class Item(BaseModel):
    productIds: list = []

app = FastAPI()
origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/api/recommend", tags=["Home"])
async def get_root(item: Item):
    result = get_recommend(item.productIds)
    return { 
        'recommend': result
    }