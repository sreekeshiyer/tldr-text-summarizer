from flask import Blueprint, Response, jsonify, request
from auth import demo_guard, main_guard
from core.general.utils import (
    MethodNotAllowedError,
    FileNotFound_Error,
    summarize_text,
    summarize_from_url,
    summarize_from_file,
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

        data = request.get_json()
        text = data["input_text"]

        res = {"result_text": summarize_text(text)[1]}

        return jsonify(res)

    else:
        return MethodNotAllowedError


@general.route(f"{BASE_URL}/summarize_from_text", methods=["POST"])
@main_guard
def summary_from_text():

    if request.method == "POST":

        data = request.get_json()
        text = data["input_text"]
        range = data["range"]

        res = {"result_text": summarize_text(text, int(range) / 100)[1]}

        return jsonify(res)

    else:
        return MethodNotAllowedError


@general.route(f"{BASE_URL}/summarize_from_url", methods=["POST"])
@main_guard
def summary_from_url():

    if request.method == "POST":

        data = request.get_json()
        url = data["url"]
        range = data["range"]

        result = summarize_from_url(url, int(range) / 100)

        res = {"extracted_text": result[1], "result_text": result[2]}
        return jsonify(res)
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

            result = summarize_from_file(file, int(request.form["range"]) / 100)

            res = {
                "extracted_text": result[1],
                "result_text": result[2],
                "filename": result[0],
            }
            return jsonify(res)
        except Exception as e:
            return "Exception " + str(e) + " Occured"

    else:
        return MethodNotAllowedError
