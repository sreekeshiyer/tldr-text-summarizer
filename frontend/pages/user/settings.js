import Layout from "@/components/Layout";
import Header from "@/components/Dashboard/Header";
import { useContext, useEffect, useState } from "react";
import { getUserServerSide } from "@/store/index";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthContext from "@/context/AuthContext";
import Loader from "@/components/Loader";

export default function SettingsPage({ user: { user } }) {
    const [email, setEmail] = useState(user.email);
    const { changeEmail } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        email !== user?.email && setButtons(true);
    }, [email, user]);

    const [buttons, setButtons] = useState(false);

    const handleEmailChange = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            if (email !== user.email) {
                const error = await changeEmail({ email });

                if (error) {
                    toast.error(error.message);
                    return;
                }

                toast.success("Email Updated!");
            } else {
                setButtons(false);
                setLoading(false);
                return;
            }
        } catch (e) {
            toast.error(e);
            setLoading(false);
            return;
        }

        setLoading(false);
    };

    return (
        <Layout title="TLDR | User Settings">
            <div className="h-[100vh]">
                {loading && <Loader />}
                <ToastContainer />
                <Header />
                <div className="flex items-center justify-center">
                    <div className="my-2 flex w-5/6 flex-col items-center justify-center rounded-md bg-gray-200 py-6 text-black sm:w-9/12 md:w-2/3 md:py-8 md:px-6 lg:w-1/3  lg:py-12">
                        <h1 className="mb-6 text-3xl font-bold">
                            User Settings
                        </h1>
                        <label htmlFor="email" className="my-2 font-semibold">
                            Email
                        </label>
                        <input
                            className="rounded-md py-2 px-3"
                            type="text"
                            name=""
                            id=""
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button
                            className="mt-4 rounded-md bg-blue-500 py-2 px-3 text-white shadow-md"
                            disabled={!buttons}
                            onClick={handleEmailChange}
                        >
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export async function getServerSideProps({ req }) {
    return {
        props: {
            user: (await getUserServerSide(req)) || null,
        },
    };
}
