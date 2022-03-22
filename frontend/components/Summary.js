export default function Summary({ text }) {
    const copyToClipBoard = (e) => {
        e.preventDefault();
        navigator.clipboard.writeText(text);
    };
    // Fetch from model
    text =
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse,cumque hic repellat tempora voluptas totam rerum,ipsumrepellendus magnam distinctio fuga. Reprehenderit ipsa nonquibusdam laudantium officiis nesciunt quod voluptatum autvoluptates, exercitationem modi! Libero suscipit, asperiores itaque aut corporis eum inventore sequi voluptatibus fugiat distinctio laboriosam illo, quidem quos!";
    return (
        <div className="relative h-full max-h-[250px] w-full cursor-pointer overflow-y-auto rounded-md  bg-white p-4 md:p-6 lg:p-10">
            <h1 className="mb-3 text-2xl font-bold text-gray-700">Summary:</h1>

            <p className="font-sans text-black">{text}</p>
            <button
                onClick={copyToClipBoard}
                className="absolute right-5 bottom-5 mt-2 w-[40px] rounded-md bg-gray-200 py-2 px-3 text-black hover:bg-gray-300"
            >
                <i className="fa-regular fa-clone"></i>
            </button>
        </div>
    );
}
