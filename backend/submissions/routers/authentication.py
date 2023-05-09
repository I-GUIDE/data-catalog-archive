from fastapi import APIRouter, Request
from starlette.responses import RedirectResponse
import uvicorn

from fastapi_oidc_auth.auth import OpenIDConnect

host = "https://auth.cuahsi.io"
realm = "IGUIDE"
client_id = "iguide-catalog"
client_secret = "jC8NwfW8KHMv0ww0WEFvpYSv9R5ddjAD"
app_uri = "http://localhost/api/"


class CustomOpenIDConnect(OpenIDConnect):
    well_known_pattern = "{}/realms/{}/.well-known/openid-configuration"

oidc = CustomOpenIDConnect(host, realm, app_uri, client_id, client_secret)
router = APIRouter()


@router.get("/")
async def homepage(request: Request) -> dict[str, str]:
    return {"message": "Not a secret"}


@router.get("/secret")
@oidc.require_login
async def secret(request: Request) -> dict[str, str]:
    return {"message": "Secret"}


@router.get("/login")
@oidc.require_login
async def login(request: Request) -> dict[str, str]:
    return {"message": "success"}


@router.get("/logout")
async def logout(request: Request) -> RedirectResponse:
    return oidc.logout(request=request)