import Button from "@/components/elements/button";
import {PasswordInput} from "@/components/elements/input";
import Link from "next/link";
import {useRouter} from "next/navigation";
import {useForm} from "react-hook-form";
import {useState} from "react";
import api from "@/lib/api";

export default function ForgotPassword({token}: {token: string}) {

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isFailed, setIsFailed] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const router = useRouter();

    const {register, handleSubmit, watch, formState: {errors}} = useForm();

    const onSubmit = async (data: any) => {
        const {password} = data;

        try {
            setIsSubmitting(true);
            await api.post("/auth/reset-password", {password}, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            setIsSuccess(true);
            setIsSubmitting(false)

            router.push("/signin");
        } catch {
            setIsFailed(true);
            setIsSubmitting(false);
            return;
        }
    }

    return (
        <>
            <div className={"w-full h-screen flex justify-center items-center flex-col"}>
                <h1 className={"text-4xl font-bold mb-5 text-center"}>Reset Password</h1>
                <form onSubmit={handleSubmit(onSubmit)} className={"mx-auto p-4"}>
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


                    {isFailed && <p className={"text-red-500 text-sm mt-2"}>An error occurred while signing up. Please try again.</p>}
                    {isSuccess && <p className={"text-green-500 text-sm mt-2"}>Your password has been reset successfully.</p>}

                    <div className={"float-right"}>
                        <Button type="submit" disabled={isSubmitting}>{!isSubmitting ? "Reset password" : "Loading..."}</Button>
                    </div>
                </form>
                <div className={"mt-5"}>
                    <Link href={"/signin"} className={"underline"}>Back to sign in</Link>
                </div>
            </div>
        </>
    )
}