import Modal from "@/components/modals/modal";
import {useForm} from "react-hook-form";
import {EMAIL_REGEX} from "@/lib/regex";
import Input from "@/components/elements/input";
import {useState} from "react";
import api from "@/lib/api";

export default function ForgotPasswordModal({onClose}: {onClose: () => void}) {

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isFailed, setIsFailed] = useState(false);

    const {register, handleSubmit, formState: {errors}} = useForm();

    const onSubmit = async (data: any) => {
        setIsSubmitting(true);

        try {
            api.post("/auth/forgot-password", data);

            setIsSuccess(true);
            setIsSubmitting(false);
        } catch {
            setIsFailed(true);
            setIsSubmitting(false);
            return;
        }
    }

    return (
        <Modal>
            <h2 className={"text-2xl font-bold text-center mb-8"}>Forgot your password?</h2>
            <p>Enter your email address below and we&apos;ll send you a link to reset your password.</p>
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
                {isSuccess && <p className={"text-green-500"}>An email has been sent to your email address. Please check your inbox.</p>}
                {isFailed && <p className={"text-red-500"}>An error occurred while sending the email. Please try again later.</p>}
                <div className="modal-action">
                    <button className="btn btn-ghost" type="button" onClick={onClose}>Close</button>
                    <button className="btn hover:bg-gray-600 dark:text-gray-800 text-white bg-gray-800 dark:bg-gray-100" disabled={isSubmitting} type="submit">{isSubmitting ? "Loading..." : "Send Email"}</button>
                </div>
            </form>
        </Modal>
    )
}