import MoreIcon from "@/assets/icons/moreIcon";
import React from "react";
import Link from "next/link";

export default function NewChatButton() {
    return (
        <div className={"px-3"}>
            <Link href={"/"} className={`shadow-lg
                hover:bg-gray-200/50 dark:hover:bg-gray-800/50 dark:text-gray-400 text-gray-600 hover:text-gray-900 dark:hover:text-gray-200
                flex items-center space-x-4 px-4 p-3 rounded-md border dark:border-gray-200 border-gray-600 transition duration-150 ease-in-out cursor-pointer`}>
                <MoreIcon size={28} />
                <span className={"text-lg font-bold"}>New Chat</span>
            </Link>
        </div>
    )
}