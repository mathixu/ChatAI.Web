"use client";
import {useForm} from "react-hook-form";
import React, {useState} from "react";
import Link from "next/link";
import {EMAIL_REGEX} from "@/lib/regex";
import Input, {PasswordInput} from "@/components/elements/input";
import Button from "@/components/elements/button";
import api from "@/lib/api";
import {useRouter} from "next/navigation";
import Cookies from "js-cookie";
import InformationModal from "@/components/modals/informationModal";
import {useAuthContext} from "@/contexts/authContext";
import ForgotPasswordModal from "@/components/modals/forgotPasswordModal";

export default function Signin() {

    const {register, handleSubmit, formState: {errors}} = useForm();

    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [isFailed, setIsFailed] = useState<boolean>(false);
    const [isForgotModalOpen, setIsForgotModalOpen] = useState<boolean>(false);

    const router = useRouter();

    const {signIn} = useAuthContext();

    const onSubmit = async (data: any) => {
        setIsSubmitting(true);
        try {
            const res = await api.post("/auth/login", data);

            const {accessToken, refreshToken} = res.data;

            Cookies.set("access_token", accessToken, { expires: 30, secure: true });
            Cookies.set("refresh_token", refreshToken, { expires: 30, secure: true });
            Cookies.set("user", JSON.stringify(res.data), { expires: 30, secure: true });

            signIn();

            router.push('/')
        }
        catch {
            setIsFailed(true);
            setIsSubmitting(false);
            return;
        }
    }

    return (
        <>
            <div className={"w-full h-full flex justify-center items-center flex-col"}>
                <h1 className={"text-4xl font-bold mb-5 text-center"}>Sign In</h1>
                <form onSubmit={handleSubmit(onSubmit)} className={"mx-auto p-4"}>
                    <Input
                        type="text"
                        placeholder={"user@example.com"}
                        {...register("email", {
                            required: "Please enter your email address",
                            pattern: {
                                value: EMAIL_REGEX,
                                message: "Please enter a valid email address"
                            }
                        })}
                        validation={errors.email}
                    />

                    <PasswordInput placeholder={"Enter your password"}
                                   {...register("password", {required: "Please enter your password"})}
                                   validation={errors.password}/>

                    <div className={"w-1/2 float-right"}>
                        <Button type="submit" disabled={isSubmitting}>{!isSubmitting ? "Sign In" : "Loading..."}</Button>
                    </div>
                </form>
                <div className={"flex flex-col"}>
                    <button
                        className={"underline mb-5"} type={"button"}
                            onClick={() => setIsForgotModalOpen(true)}
                            >Forgot Password?</button>
                    <Link href={"/signup"} className={"underline"}>Don&apos;t have an account? Sign up</Link>
                </div>
            </div>
            {
                isFailed && <InformationModal title={"Invalid Credentials"}
                                              message={"Please check your credentials and try again."}
                                              onClose={() => setIsFailed(false)}/>
            }
            {
                isForgotModalOpen && <ForgotPasswordModal onClose={() => setIsForgotModalOpen(false)}/>
            }
        </>
    )
}