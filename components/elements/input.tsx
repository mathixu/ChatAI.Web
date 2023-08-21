import React, {forwardRef, InputHTMLAttributes, useState} from "react";
import {RegisterOptions} from 'react-hook-form';
import EyeIcon from "@/assets/icons/eyeIcon";
import HideEyeIcon from "@/assets/icons/hideEyeIcon";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    validation?: any;
    register?: RegisterOptions;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ onChange, validation, ...props }, ref) => {
    return (
        <div className={"mb-5"}>
            <input
                className="border rounded-lg py-3 px-4 w-full placeholder:text-gray-500 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700"
                onChange={onChange}
                ref={ref}
                {...props}
            />
            {validation && <p className="text-red-500 text-sm">{validation.message}</p>}
        </div>
    );
});

export default Input;

Input.displayName = "Input";

export const PasswordInput = forwardRef<HTMLInputElement, InputProps>(({ onChange, validation, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <>
            <div className={"relative"}>
                <input
                    className="border rounded-lg py-3 px-4 w-full placeholder:text-gray-500 pr-12 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700"
                    onChange={onChange}
                    ref={ref}
                    type={showPassword ? "text" : "password"}
                    {...props}
                />
                <div className={"text-lg absolute top-1/2 transform -translate-y-1/2 right-4 cursor-pointer text-black"} onClick={() => setShowPassword(!showPassword)}>
                    {
                        showPassword ?
                            <EyeIcon size={24} />
                            : <HideEyeIcon size={24} />
                    }
                </div>
            </div>
            <div className={"mb-5"}>
                {validation && <p className="text-red-500 text-sm">{validation.message}</p>}
            </div>
        </>
    );
});

PasswordInput.displayName = "PasswordInput";

export const InputForm = ({id, label, type, placeholder, register, validation}: any) => (
    <>
        <label htmlFor={id} className={"text-md font-medium"}>{label}</label>
        <Input type={type} placeholder={placeholder} {...register} validation={validation}/>
    </>
)

InputForm.displayName = "InputForm";

