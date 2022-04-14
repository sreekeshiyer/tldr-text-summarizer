export default function SummarizeFromURL() {
    return (
        <>
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
        </>
    );
}
