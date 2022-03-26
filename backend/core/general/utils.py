from typing import Any
from flask import Response
from newspaper import Article
from core.general.model import summarize
SAVE_DIR = "./backend/static/temp/"
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