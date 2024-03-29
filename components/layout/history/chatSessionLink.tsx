import PencilIcon from "@/assets/icons/pencilIcon";
import TrashIcon from "@/assets/icons/trashIcon";
import ChatSession from "@/types/chatSession";
import Link from "next/link";
import {getDefaultChatSessionTitle} from "@/lib/functions/chatSessionUtils";

export default function ChatSessionLink({chatSession, isActive}: {chatSession: ChatSession, isActive: boolean}) {

    const handleEdit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
    }

    const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
    }

    return (
        <Link href={`?c=${chatSession.id}`} className={`${isActive ? 'bg-gray-200 dark:bg-gray-800 dark:text-white text-black'
            : 'hover:bg-gray-200/50 dark:hover:bg-gray-800/50 dark:text-gray-400 text-gray-600 hover:text-gray-900 dark:hover:text-gray-200'} 
            group flex items-center justify-between pl-3 pr-2 py-3 rounded-xl transition duration-150 ease-in-out cursor-pointer `}>
            <p className={"space-x-4 truncate"}>
                <span className={"text-xl"}>#</span>
                <span className={"text-md"}>{chatSession.title ||getDefaultChatSessionTitle(chatSession)}</span>
            </p>
            <div className={`${isActive ? "flex" : "hidden group-hover:flex"} items-center transition duration-150 ease-out`}>
                <button onClick={handleEdit} type={"button"} className={"hover:bg-gray-100 dark:hover:bg-black/50 p-1 rounded"}>
                    <PencilIcon size={20} />
                </button>
                <button onClick={handleDelete} type={"button"} className={"hover:bg-gray-100 dark:hover:bg-black/50 p-1 rounded"}>
                    <TrashIcon size={20} />
                </button>
            </div>
        </Link>
    )
}

