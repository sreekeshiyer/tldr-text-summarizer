import { useRef, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Summary from "@/components/Summary";
import Loader from "@/components/Loader";
import { summarizePlainText } from "@/store/index";

export default function DemoWorkSpace() {
    const [text, setText] = useState("");
    const [showResult, setShowResult] = useState(false);
    const [resultText, setResultText] = useState("");
    const [loading, setLoading] = useState(false);

    const resultRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        // Handle text input
        if (text === "") {
            toast.info("Please enter some text.");
            return;
        }

        const len = text.split(" ").length;
        if (len < 30) {
            toast.info("Text needs to have at least 30 words.");
            return;
        } else if (len > 400) {
            toast.info(
                "Word Limit is 400 for this Demo. Sign Up for more headroom :)"
            );
            return;
        }

        try {
            let { result_text } = await summarizePlainText(text);
            setResultText(result_text);
        } catch (e) {
            toast.error(e);
            setLoading(false);
            return;
        }

        setLoading(false);
        setShowResult(true);

        resultRef?.current.scrollIntoView({
            block: "start",
            behavior: "smooth",
        });
    };

    return (
        <div className="my-10 flex flex-col items-center justify-center border-t-[1px] border-gray-200 border-opacity-20">
            <ToastContainer />
            {loading && <Loader />}
            <h1 className="py-14 text-2xl font-extrabold tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
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

            <button
                className="my-5 inline-block rounded bg-blue-600 px-6 py-2.5 font-medium leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
                type="submit"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                onClick={handleSubmit}
            >
                Submit
            </button>

            <div className="my-4">
                {showResult && <Summary text={resultText} />}
                <div ref={resultRef} style={{ height: 0 }} />
            </div>
            <h4 className="text-[0.7rem] text-gray-500 md:text-[0.9rem]">
                For more functionalities, Sign Up!
            </h4>
        </div>
    );
}
