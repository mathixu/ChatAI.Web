"use client";
import Sidebar from "@/components/layout/sidebar";
import {useAuthContext} from "@/contexts/authContext";
import {useEffect} from "react";
import Cookies from "js-cookie";
import {useRouter} from "next/navigation";
import {ChatContextProvider} from "@/contexts/chatContext";

export default function Layout({children}: { children: React.ReactNode }) {

    const {isAuth, signOut, signIn} = useAuthContext();

    const router = useRouter();

    useEffect(() => {
        if(!Cookies.get("access_token")) {
            signOut();
            router.push("/signin");
        } else {
            signIn();
        }
    }, [isAuth, signIn, signOut, router]);

    return (
        <div className={"overflow-y-hidden"}>
            <ChatContextProvider>
                <Sidebar />
                <main className="lg:ml-96 h-[90vh] overflow-hidden">
                    {children}
                </main>
            </ChatContextProvider>
        </div>
    )
}

