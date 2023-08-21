"use client";
import Signin from "@/components/forms/signin";
import NotAuthenticated from "@/components/notAuthenticated";

export default function Page() {
    return (
        <NotAuthenticated>
            <Signin />
        </NotAuthenticated>
    )
}