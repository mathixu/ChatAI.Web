"use client";
import NotAuthenticated from "@/components/notAuthenticated";
import Signup from "@/components/forms/signup";

export default function Page() {
    return (
        <NotAuthenticated>
            <Signup />
        </NotAuthenticated>
    )
}