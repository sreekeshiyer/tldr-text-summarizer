from flask import Blueprint, Response
from auth import demo_guard
from config import BASE_URL

general = Blueprint("general", __name__)

# *----------------- Index page -----------------*
@general.route(f"{BASE_URL}/index")
def hello():
    return Response(
        """{"greeting": "Hello. Welcome to the API"}""",
        status=200,
        mimetype="application/json",
    )


@general.route(f"{BASE_URL}/check_auth")
@demo_guard
def auth_check():
    return Response(
        """{"greeting": "Hello. Welcome to the API. You have Authenticated Access."}""",
        status=200,
        mimetype="application/json",
    )
