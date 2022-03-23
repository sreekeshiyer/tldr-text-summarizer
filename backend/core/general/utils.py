from flask import Response
import textract
# TODO 7: Uncomment this import after your model is ready
# from core.general.models import summarize

# TODO 1: Make a Utility function from your model, import it here, such that, you pass plain text as argument and get the summarized text in return. Preferably create a new file models.py in the same directory to do that.

MethodNotAllowedError = Response(
    """{"message": "Method Not Allowed"}""",
    status=405,
    mimetype="application/json",
)

FileNotFound_Error = Response(
    """{"message": "Bad Request"}""", status=400, mimetype="application/json"
)

# TODO 6: Write a utility function to extract text from a given URL


def extract_text_from_url(url):

    # TODO: Write your logic here
    return {"url": url, "text": "extracted_text_from_url"}