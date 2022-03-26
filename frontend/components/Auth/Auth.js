import Image from "next/image";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "@/components/Loader";
import AuthContext from "@/context/AuthContext";
import { useState, useContext } from "react";

export default function Auth() {
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const { login, googleLogin } = useContext(AuthContext);
    const [isSubmitted, setSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            let error = await login({ email });
            setEmail("");

            if (error) {
                toast.error(error?.message);
                return;
            }
            toast.info(
                "Magic Link Sent. Follow the link in your email to sign in!"
            );
            setSubmitted(true);
        } catch (error) {
            toast.error(error?.message || error.toString());
            return;
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleSignIn = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            let error = await googleLogin();

            if (error) {
                toast.error(error?.message);
                return;
            }
        } catch (error) {
            toast.error(error?.message || error.toString());
            return;
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex w-[90%] flex-col items-center justify-center gap-3 rounded-md bg-gray-400 bg-opacity-60 py-4 text-black shadow-md sm:w-2/3 md:w-1/2 md:justify-start md:gap-4 md:p-6 lg:max-w-xl lg:p-8 xl:p-12">
            <ToastContainer />
            {loading && <Loader />}
            <div className="flex h-full flex-col items-center justify-center md:w-full md:items-start">
                {!isSubmitted ? (
                    <>
                        <h1 className="my-3 self-center text-3xl font-bold text-gray-200">
                            Sign In With Email
                        </h1>
                        <form
                            className="flex w-full max-w-lg items-center justify-center gap-8"
                            onSubmit={handleSubmit}
                        >
                            <div className="my-6">
                                <input
                                    className="focus:shadow-outline appearance-none rounded border py-2 px-3 leading-tight text-black shadow focus:outline-none "
                                    id="email"
                                    required={true}
                                    type="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="flex items-center justify-center">
                                <button
                                    className="mb-1 flex h-1/2 w-full cursor-pointer items-center justify-center rounded-md border border-transparent bg-blue-600 py-1 px-3 text-base font-medium text-white shadow-lg shadow-blue-600/50 transition-colors duration-500 ease-in-out hover:bg-blue-700"
                                    type="submit"
                                >
                                    Log In
                                </button>
                            </div>
                        </form>
                        <h1 className="my-5 self-center text-xl font-bold">
                            OR
                        </h1>
                        <button
                            className="self-center"
                            onClick={handleGoogleSignIn}
                        >
                            <Image
                                src="/assets/google.png"
                                alt="GoogleIcon"
                                height={40}
                                width={210}
                            />
                        </button>
                    </>
                ) : (
                    <h1 className="self-center text-2xl text-white">
                        Check for a link in your email!
                    </h1>
                )}
            </div>
        </div>
    );
}
