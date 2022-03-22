from flask import Blueprint, Response
from auth import demo_guard, main_guard
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


@general.route(f"{BASE_URL}/demo")
@demo_guard
def demo():
    return Response(
        """{"greeting": "Hello. Welcome to the API. You have Authenticated Access."}""",
        status=200,
        mimetype="application/json",
    )


@general.route(f"{BASE_URL}/summarize_from_text")
@main_guard
def summary_from_text():
    # TODO : Call summarize_from_text function (utils.py) here
    # Replace static strings with the tuple values you get in return
    res = {"result_text": "result text"}
    return Response(
        res,
        status=200,
        mimetype="application/json",
    )


@general.route(f"{BASE_URL}/summarize_from_url")
@main_guard
def summary_from_url():
    # TODO : Call summarize_from_url function (utils.py) here
    # Replace static strings with the tuple values you get in return
    res = {"extracted_text": "extracted_text", "result_text": "summary"}
    return Response(
        res,
        status=200,
        mimetype="application/json",
    )


@general.route(f"{BASE_URL}/summarize_from_file")
@main_guard
def summary_from_file():
    # TODO : Call summarize_from_file function (utils.py) here
    # Replace static strings with the tuple values you get in return
    # Validation is required here, I'll add it later
    res = {"extracted_text": "extracted_text_from_file", "result_text": "summary"}
    return Response(
        res,
        status=200,
        mimetype="application/json",
    )
