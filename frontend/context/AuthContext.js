import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { supabase } from "@/config/index";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const router = useRouter();

    useEffect(() => {
        setUser(supabase.auth.user());

        const { data: authListener } = supabase.auth.onAuthStateChange(
            async (event, session) => {
                await handleAuthChange(event, session);

                if (event === "SIGNED_IN") router.push("/user/dashboard");
                else if (event === "SIGNED_OUT") router.push("/");

                setUser(session?.user || null);
            }
        );

        return () => {
            authListener.unsubscribe();
        };
    }, []);

    const login = async ({ email }) => {
        const { error } = await supabase.auth.signIn({ email });
        if (error) return error;
    };

    const googleLogin = async () => {
        const { error } = await supabase.auth.signIn({
            provider: "google",
        });
        if (error) return error;
    };

    const logout = async () => {
        const { error } = supabase.auth.signOut();
        if (error) return error;
    };

    const changeEmail = async ({ email }) => {
        const { error } = await supabase.auth.update({
            email: email,
        });

        if (error) return error;
    };

    async function handleAuthChange(event, session) {
        await fetch("/api/auth", {
            method: "POST",
            headers: new Headers({ "Content-Type": "application/json" }),
            credentials: "same-origin",
            body: JSON.stringify({ event, session }),
        });
    }

    return (
        <AuthContext.Provider
            value={{
                user,
                login,
                googleLogin,
                logout,
                changeEmail,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
