import textract
import os
from werkzeug.utils import secure_filename

# Constants

SAVE_DIR = "./static/temp/"
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


# TODO 1: Make a Utility function from your model, import it here, such that, you pass plain text as argument and get the summarized text in return. Preferably create a new file models.py in the same directory to do that.


def summarize_from_url(url: str) -> tuple(str):

    # TODO 2: Call another Utility Function (you'll have to create one) to extract text from a URL.
    # Eg. text = 'extracted_text_from_url'

    # TODO 3: Call the Main Function, pass in the text as argument
    # Eg. return summarize(text)
    return (url, "extracted_text" "summarized_text_from_url")


def summarize_from_file(file: str) -> tuple(str):

    # TODO 4: Call extract_text_from_file to get the extracted text.

    # TODO 5: Call the Main Function, pass in the text as argument
    # Eg. return summarize(text)
    return ("extracted_text_from_file", "summarized_text")
