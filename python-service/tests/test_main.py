from fastapi.testclient import TestClient

from main import app


def test_read_root_returns_secure_status():
    client = TestClient(app)
    response = client.get("/")

    assert response.status_code == 200
    assert response.json() == {"status": "Secure Python Service Running"}
