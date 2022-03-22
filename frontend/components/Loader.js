export default function Loader() {
    let circleCommonClasses = "h-5 w-5 bg-blue-600 rounded-full";

    return (
        <div className="absolute inset-y-0 right-0 flex h-full w-full items-center justify-center backdrop-blur-sm">
            <div className={`${circleCommonClasses} mr-1 animate-bounce`}></div>
            <div
                className={`${circleCommonClasses} mr-1 animate-bounce200`}
            ></div>
            <div className={`${circleCommonClasses} animate-bounce400`}></div>
        </div>
    );
}