export default function Summary({ text, size }) {
    const copyToClipBoard = (e) => {
        e.preventDefault();
        navigator.clipboard.writeText(text);
    };
    return (
        <div className="relative h-full">
            <div className="summary-scroll h-full max-h-[250px] w-full cursor-pointer overflow-y-auto  rounded-md bg-white p-4 md:p-6 lg:p-10">
                <div className="flex items-center justify-between">
                    <h1 className="mb-3 text-2xl font-bold text-gray-700">
                        Summary:
                    </h1>
                    <p className="font-serif text-justify text-[0.8rem] font-semibold text-black">
                        Summary Size: {size} %
                    </p>
                </div>

                <p className="text-justify font-sans text-black">
                    {text.length > 0
                        ? text
                        : "Text Size is too small to generate a Summary."}
                </p>
            </div>
            <button
                onClick={copyToClipBoard}
                className="absolute right-5 bottom-5 mt-2 w-[40px] rounded-md bg-gray-200 py-2 px-3 text-black opacity-70 hover:bg-gray-300"
            >
                <i className="fa-regular fa-clone"></i>
            </button>
        </div>
    );
}
