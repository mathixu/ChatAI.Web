import Message from "@/types/message";
import EditIcon from "@/assets/icons/editIcon";
import CopyIcon from "@/assets/icons/copyIcon";

export default function MessageRow({message}: {message: Message}) {
    return (
        <div
            className={`${message.isFromUser ? "bg-gray-300/50 dark:bg-gray-900/50" : "bg-gray-100/50 dark:bg-gray-700"} 
                            w-full flex sm:flex-row flex-col sm:justify-center items-center sm:items-start py-6 text-md sm:relative group
                            first:border-none border-t border-gray-50 dark:border-gray-950`}>
            <div className={`w-10/12 sm:w-8/12 2xl:w-6/12 order-2 sm:order-1`}>
                <p className={"text-sm mb-2 italic"}>{message.isFromUser ? "You" : "Chat AI"}:</p>
                <p>{message.content}</p>
            </div>
            <ChatTools message={message}/>
        </div>
    )
}

const ChatTools = ({message} : {message: Message}) => {
    return (
        <div
            className={`order-1 sm:order-2 sm:ml-8 sm:absolute w-10/12 sm:w-1/12 sm:translate-x-[450%] 2xl:translate-x-[350%] 
                text-gray-700 dark:text-gray-400 lg:hidden lg:group-hover:block`}>
            {
                message.isFromUser ? (
                    <button type={"button"}>
                        <EditIcon size={20} />
                    </button>
                ) : (
                    <button type={"button"} onClick={() => navigator.clipboard.writeText(message.content)}
                            className={"active:text-gray-500 transition-colors"}>
                        <CopyIcon size={20} />
                    </button>
                )
            }
        </div>
    )
}