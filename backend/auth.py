from functools import wraps
from config import get_config
from flask import request, jsonify


def main_guard(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = None
        if "authorization" in request.headers:
            token = request.headers["authorization"]
        if not token:
            return jsonify({"message": "Token is missing!"}), 401

        if token != "Bearer " + get_config("FLASK_API_KEY"):
            return jsonify({"message": "Token is invalid!"}), 401

        return f(*args, **kwargs)

    return decorated


def demo_guard(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = None
        if "authorization" in request.headers:
            token = request.headers["authorization"]
        if not token:
            return jsonify({"message": "Token is missing!"}), 401

        if token != "Bearer " + get_config("FLASK_DEMO_KEY"):
            return jsonify({"message": "Token is invalid!"}), 401

        return f(*args, **kwargs)

    return decorated
