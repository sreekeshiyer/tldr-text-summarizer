import os
from flask import Blueprint, Response, request
from auth import demo_guard, main_guard
from core.general.utils import (
    SAVE_DIR,
    MethodNotAllowedError,
    FileNotFound_Error,
    extract_text_from_file,
)
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


@general.route(f"{BASE_URL}/demo", methods=["POST"])
@demo_guard
def demo():
    if request.method == "POST":
        # Uncomment these two lines when you're working on the function
        # data = request.get_json()
        # text = data['input_text']

        # TODO : Call summarize_from_text function (utils.py) here
        # Replace static strings with the tuple values you get in return
        res = {"result_text": "result text"}
        return Response(
            res,
            status=200,
            mimetype="application/json",
        )

    else:
        return MethodNotAllowedError


@general.route(f"{BASE_URL}/summarize_from_text", methods=["POST"])
@main_guard
def summary_from_text():

    if request.method == "POST":
        # Uncomment these two lines when you're working on the function
        # data = request.get_json()
        # text = data['input_text']

        # TODO : Call summarize_from_text function (utils.py) here
        # Replace static strings with the tuple values you get in return
        res = {"result_text": "result text"}
        return Response(
            res,
            status=200,
            mimetype="application/json",
        )

    else:
        return MethodNotAllowedError


@general.route(f"{BASE_URL}/summarize_from_url", methods=["POST"])
@main_guard
def summary_from_url():

    if request.method == "POST":

        # Uncomment these two lines when you're working on the function
        # data = request.get_json()
        # url = data['url']

        # TODO : Call summarize_from_url function (utils.py) here
        # Replace static strings with the tuple values you get in return
        res = {"extracted_text": "extracted_text_from_url", "result_text": "summary"}
        return Response(
            res,
            status=200,
            mimetype="application/json",
        )
    else:
        return MethodNotAllowedError


@general.route(f"{BASE_URL}/summarize_from_file", methods=["POST"])
@main_guard
def summary_from_file():

    if request.method == "POST":

        try:
            if "file" not in request.files:
                return FileNotFound_Error

            file = request.files["file"]

            if file.filename == "":
                return FileNotFound_Error

            file_res = extract_text_from_file(file)
            text = file_res["text"]

            # TODO : Call summarize_from_file function (utils.py) here
            # Replace static strings with the tuple values you get in return

            os.remove(os.path.join(SAVE_DIR, file_res["filename"]))

            res = {
                "extracted_text": text,
                "result_text": "summary",
            }
            return Response(
                res,
                status=200,
                mimetype="application/json",
            )
        except Exception as e:
            return "Exception " + str(e) + " Occured"

    else:
        return MethodNotAllowedError
