"use client";
import NotAuthenticated from "@/components/notAuthenticated";
import ForgotPassword from "@/components/forms/forgotPassword";

export default function Page({params}: {params: {token: string}}) {
    return (
        <NotAuthenticated>
            <ForgotPassword token={params.token} />
        </NotAuthenticated>
    )
}