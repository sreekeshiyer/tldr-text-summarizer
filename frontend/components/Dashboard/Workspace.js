import { useState, useRef, useContext } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Summary from "@/components/Summary";
import Loader from "@/components/Loader";
import AuthContext from "@/context/AuthContext";
import {
    addScan,
    summarizeFromFile,
    summarizeFromURL,
    summarizePlainText,
} from "@/store/index";

export default function WorkSpace() {
    const [text, setText] = useState(null);
    const [file, setFile] = useState(null);
    const [url, setURL] = useState("");
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultText, setResultText] = useState("");
    const resultRef = useRef(null);

    const { user } = useContext(AuthContext);

    const handleClear = (e) => {
        e.preventDefault();

        setText(null);
        setFile(null);
        setURL("");
    };

    const handleURLSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (url === "") {
            toast.error("URL can't be Empty.");
            setLoading(false);
            return;
        }

        // Get Input and Result text from API
        const input_text = "";

        try {
            const { extracted_text, result_text } = await summarizeFromURL({
                url,
            });
            setResultText(result_text);
            input_text = extracted_text;
        } catch (e) {
            toast.error(e);
            setLoading(false);
            return;
        }

        try {
            let e = await addScan({
                user_id: user.id,
                file: null,
                input_text: input_text,
                url: url,
                result_text: resText,
            });

            if (e) {
                toast.error(e.message);
                setLoading(false);
                return;
            }
        } catch (e) {
            toast.error(e);
            setLoading(false);
            return;
        }

        setShowResult(true);
        setLoading(false);
        toast.success("Text Summarized!");
        resultRef?.current.scrollIntoView({
            block: "start",
            behavior: "smooth",
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        // Handle text input
        if (text === "" && !file) {
            toast.info("Please enter some text or upload a file.");
            setLoading(false);
            return;
        }

        const len = text.split(" ").length;
        if (len < 30) {
            toast.info("Text needs to have at least 30 words.");
            setLoading(false);
            return;
        } else if (len > 5000) {
            toast.info("Word Limit is 5000.");
            setLoading(false);
            return;
        }

        var extract_text = "";

        if (file) {
            // Use File as Input
            try {
                const { extracted_text, result_text } = await summarizeFromFile(
                    file
                );
                setResultText(result_text);
                extract_text = extracted_text;
            } catch (e) {
                toast.error(e);
                setLoading(false);
                return;
            }
        } else {
            // Use text

            try {
                const { result_text } = await summarizePlainText({
                    input_text: text,
                });
                setResultText(result_text);
            } catch (e) {
                toast.error(e);
                setLoading(false);
                return;
            }
        }

        try {
            let e = await addScan({
                user_id: user.id,
                file: file || null,
                input_text: extract_text || text || null,
                url: null,
                result_text: resultText,
            });

            if (e) {
                toast.error(e.message);
                setLoading(false);
                return;
            }
        } catch (e) {
            toast.error(e);
            return;
        }

        setShowResult(true);
        setLoading(false);
        toast.success("Text Summarized!");
        resultRef?.current.scrollIntoView({
            block: "start",
            behavior: "smooth",
        });
    };

    return (
        <div className="my-10 flex flex-col items-center justify-center">
            {loading && <Loader />}
            <ToastContainer />
            <h1 className="py-14 text-2xl font-extrabold tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
                Enter a URL
            </h1>
            <input
                type="text"
                className="w-[90%] rounded-sm border-gray-100 bg-gray-900 text-gray-100 shadow-md sm:w-full"
                name="url"
                value={url}
                onChange={(e) => setURL(e.target.value)}
            />
            <div className="flex items-center justify-center gap-3">
                <button
                    className="my-5 inline-block rounded bg-blue-600 px-6 py-2.5 font-medium leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
                    type="submit"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    onClick={handleURLSubmit}
                >
                    Submit
                </button>
                <button
                    className="my-5 inline-block rounded bg-yellow-600 px-6 py-2.5 font-medium leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-yellow-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-800 active:shadow-lg"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    onClick={handleClear}
                >
                    Clear
                </button>
            </div>

            <h2 className="my-8 text-2xl font-extrabold tracking-tight text-gray-200 sm:text-xl md:text-2xl lg:text-3xl">
                OR
            </h2>
            <h1 className="py-8 text-2xl font-extrabold tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
                Paste Your Text
            </h1>
            <textarea
                className="w-[90%] rounded-sm bg-gray-900 text-gray-100 shadow-md sm:w-full"
                name="fulltext"
                id=""
                cols="60"
                rows="15"
                value={text}
                onChange={(e) => setText(e.target.value)}
            ></textarea>
            <h2 className="my-5 text-2xl font-extrabold tracking-tight text-gray-200 sm:text-xl md:text-2xl lg:text-3xl">
                OR
            </h2>
            <h1 className="my-5 text-2xl font-extrabold tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
                Upload a File
            </h1>
            <div className="my-5 flex justify-center">
                <div className="mb-3 w-96">
                    <input
                        className="form-control m-0 block w-full rounded border border-solid border-gray-600 bg-gray-800 bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-200 transition ease-in-out focus:border-blue-600 focus:bg-gray-800 focus:text-gray-300 focus:outline-none"
                        type="file"
                        id="formFile"
                        value={file}
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                </div>
            </div>

            <button
                className="my-5 inline-block rounded bg-blue-600 px-6 py-2.5 font-medium leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
                type="submit"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                onClick={handleSubmit}
            >
                Submit
            </button>

            <div className="my-4 px-4">
                {showResult && <Summary text={resultText} />}
                <div ref={resultRef} style={{ height: 0 }} />
            </div>
        </div>
    );
}
