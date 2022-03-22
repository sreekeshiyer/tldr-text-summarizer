import Link from "next/link";
import Image from "next/image";
import AuthContext from "@/context/AuthContext";
import { useContext } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Header() {
    const { logout } = useContext(AuthContext);

    const handleLogout = async (e) => {
        e.preventDefault();

        try {
            let error = await logout();
            error && toast.error(error.message);
        } catch (error) {
            toast.error(error);
        }
    };

    return (
        <div className="flex w-full items-center justify-between px-2 pt-10 sm:px-5 md:px-10 lg:px-24 xl:px-52">
            <div className="flex items-center gap-6">
                <div className="logo">
                    <Link href="/">
                        <a>
                            <span className="sr-only">Logo</span>
                            <div className="flex items-center justify-center gap-4">
                                <Image src="/logo.png" width={50} height={50} />
                            </div>
                        </a>
                    </Link>
                </div>
                <div className="mt-2 ml-5">
                    <Link href="/user/dashboard">
                        <a>
                            <div className="flex items-center justify-center gap-4">
                                <h3 className="font-semibold">Dashboard</h3>
                            </div>
                        </a>
                    </Link>
                </div>
                <div className="mt-2 ">
                    <Link href="/user/scans">
                        <a>
                            <div className="flex items-center justify-center gap-4">
                                <h3 className="font-semibold">
                                    Previous Scans
                                </h3>
                            </div>
                        </a>
                    </Link>
                </div>
            </div>

            <div className="mb-4 flex items-center justify-center gap-6">
                <div className="mt-8">
                    <Link href="/user/settings">
                        <a className=" text-gray-200">
                            <span>
                                <i className="fa-solid fa-gear"></i>
                            </span>
                        </a>
                    </Link>
                </div>
                <div className="mt-8">
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-2 rounded-md bg-gray-200 py-2 px-4 text-[0.9rem] text-black"
                    >
                        <span>
                            <i className="fa-solid fa-right-from-bracket"></i>
                        </span>
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
}
