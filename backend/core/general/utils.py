import os
from typing import Any
import textract
from flask import Response
from werkzeug.utils import secure_filename
from newspaper import Article
from core.general.model import summarize

# Constants

MethodNotAllowedError = Response(
    """{"message": "Method Not Allowed"}""",
    status=405,
    mimetype="application/json",
)

FileNotFound_Error = Response(
    """{"message": "Bad Request"}""", status=400, mimetype="application/json"
)

SAVE_DIR = "./backend/static/temp/"
ALLOWED_EXTENSIONS = {"txt", "pdf", "doc", "docx"}

# Utility Functions


def allowed_file(filename: str):
    return "." in filename and filename.rsplit(".", 1)[1].lower() in ALLOWED_EXTENSIONS


def extract_text_from_file(file):

    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        file.save(os.path.join(SAVE_DIR, filename))
        currFile = os.path.join(SAVE_DIR) + filename

        text = textract.process(currFile)
        return {"text": text, "filename": filename}


# TODO 6: Write a utility function to extract text from a given URL


def extract_text_from_url(url):

    article = Article(url)
    article.download()
    article.parse()
    return {"url": url, "text": article.text}


def summarize_text(text: str, range=0.3):

    return (text, summarize(text, range))


def summarize_from_url(url: str, range=0.3):

    text = extract_text_from_url(url)["text"]

    return (url, text, summarize(text, range))


def summarize_from_file(file: Any, range=0.3):

    file_res = extract_text_from_file(file)
    text = file_res["text"]
    text = text.decode(encoding="UTF-8")

    os.remove(os.path.join(SAVE_DIR, file_res["filename"]))

    return (file_res["filename"], text, summarize(text, range))
