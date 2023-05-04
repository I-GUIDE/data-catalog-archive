from beanie import init_beanie
from fastapi import APIRouter, Depends, HTTPException
from fastapi.responses import RedirectResponse
from fastapi_keycloak import FastAPIKeycloak, OIDCUser

router = APIRouter()

idp = FastAPIKeycloak(
    server_url="https://localhost/auth",
    client_id="test-client",
    client_secret="GzgACcJzhzQ4j8kWhmhazt7WSdxDVUyE",
    admin_client_secret="BIcczGsZ6I8W5zf0rZg5qSexlloQLPKB",
    realm="Test",
    callback_uri="https://localhost/api/callback"
)
idp.add_swagger_config(router)

@router.get("/")  # Unprotected
def root():
    return 'Hello World'


@router.get("/user")  # Requires logged in
def current_users(user: OIDCUser = Depends(idp.get_current_user())):
    return user


@router.get("/admin")  # Requires the admin role
def company_admin(user: OIDCUser = Depends(idp.get_current_user(required_roles=["admin"]))):
    return f'Hi admin {user}'


@router.get("/login")
def login_redirect():
    return RedirectResponse(idp.login_uri)


@router.get("/callback")
def callback(session_state: str, code: str):
    return idp.exchange_authorization_code(session_state=session_state, code=code)  # This will return an access token
