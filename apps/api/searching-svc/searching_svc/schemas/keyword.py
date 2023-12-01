from pydantic import BaseModel


class Context(BaseModel):
    context: str
