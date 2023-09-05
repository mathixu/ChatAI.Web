import Message from "@/types/message";
import MessageRow from "@/components/chat/messageRow";

export default function MessageList({messages}: {messages: Message[]}) {
    return (
        <>
            {messages.map((message) => (
                <MessageRow key={message.id}
                            message={message}
                />
            ))}
            <div className={`${!messages[messages.length - 1].isFromUser ? "bg-gray-300/50 dark:bg-gray-900/50" : "bg-gray-100/50 dark:bg-gray-700"} border-t border-gray-50 dark:border-gray-950 w-full min-h-[30vh] sm:min-h-[15vh]`}>
            </div>
        </>
    )
}