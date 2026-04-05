from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"status": "Secure Python Service Running"}