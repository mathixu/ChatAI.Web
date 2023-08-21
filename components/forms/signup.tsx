import {EMAIL_REGEX} from "@/lib/regex";
import Button from "@/components/elements/button";
import Input, {PasswordInput} from "@/components/elements/input";
import Link from "next/link";
import InformationModal from "@/components/modals/informationModal";
import {useForm} from "react-hook-form";
import {useState} from "react";
import api from "@/lib/api";
import {useAuthContext} from "@/contexts/authContext";
import Cookies from "js-cookie";
import {useRouter} from "next/navigation";

export default function Signup() {

    const {register, handleSubmit, watch, formState: {errors}} = useForm();

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isFailed, setIsFailed] = useState(false);

    const {signIn} = useAuthContext();

    const router = useRouter();

    const onSubmit = async (data: any) => {
        const {confirmPassword, ...user} = data;

        setIsSubmitting(true);
        try {
            const res = await api.post("/auth/signup", user);

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
            <div className={"w-full h-screen flex justify-center items-center flex-col"}>
                <h1 className={"text-4xl font-bold mb-5 text-center"}>Sign Up</h1>
                <form onSubmit={handleSubmit(onSubmit)} className={"mx-auto p-4"}>
                    <Input
                        type="text"
                        placeholder={"Your Nickname"}
                        {...register("nickname", {
                            required: "Please enter your nickname",
                            minLength: {
                                value: 3,
                                message: "Your nickname must be at least 3 characters long"
                            },
                            maxLength: {
                                value: 26,
                                message: "Your nickname must be at most 26 characters long"
                            }
                        })}
                        validation={errors.email}
                    />

                    <Input
                        type="text"
                        placeholder={"user@example.com"}
                        {...register("email", {
                            required: "Please enter your email address",
                            pattern: {
                                value: EMAIL_REGEX,
                                message: "Please enter a valid email address"
                            },
                            maxLength: {
                                value: 200,
                                message: "Your email address must be at most 200 characters long"
                            }
                        })}
                        validation={errors.email}
                    />

                    <PasswordInput placeholder={"Enter your password"}
                                   {...register("password", {
                                       required: "Please enter your password",
                                       minLength: {
                                           value: 6,
                                           message: "Your password must be at least 6 characters long"
                                       },
                                       maxLength: {
                                           value: 200,
                                           message: "Your password must be at most 200 characters long"
                                       }
                                   })}
                                   validation={errors.password}/>

                    <PasswordInput placeholder={"Confirm your password"}
                                   {...register("confirmPassword", {
                                       required: "Please confirm your password",
                                       validate: value => value === watch('password') || "Your passwords do not match"
                                   })}
                                   validation={errors.confirmPassword}/>

                    <div className={"w-1/2 float-right"}>
                        <Button type="submit" disabled={isSubmitting}>{!isSubmitting ? "Sign Up" : "Loading..."}</Button>
                    </div>
                </form>
                <div className={"mt-5"}>
                    <Link href={"/signin"} className={"underline"}>Already have an account ? Sign In </Link>
                </div>
            </div>
            {
                isFailed &&
                <InformationModal title={"An error is occurred."} onClose={() => setIsFailed(false)} />
            }
        </>
    )
}