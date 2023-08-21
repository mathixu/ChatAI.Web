"use client";
import {useEffect} from "react";
import ThemeSwitcher from "@/components/layout/ThemeSwitcher";
import {useRouter} from "next/navigation";
import Cookies from "js-cookie";

export default function NotAuthenticated({children}: { children: React.ReactNode}) {

    const router = useRouter();

    useEffect(() => {
        if (Cookies.get("access_token")) {
            router.push("/");
        }
    }, [router]);

    return (
        <div className={"relative h-full"}>
            <div className={"h-full w-full items-center justify-center"}>
                {children}
            </div>
            <div className={"absolute top-16 left-16"}>
                <ThemeSwitcher />
            </div>
        </div>
    )
}