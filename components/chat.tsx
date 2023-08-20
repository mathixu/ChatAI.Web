"use client";
import SendIcon from "@/assets/icons/sendIcon";
import EditIcon from "@/assets/icons/editIcon";
import CopyIcon from "@/assets/icons/copyIcon";

export default function Chat() {
    return (
        <div className={"flex items-center justify-center bg-gray-200 dark:bg-gray-800 h-[90vh] rounded-t-xl mx-0 md:mx-2 lg:mr-4 overflow-y-auto"}>
            <div className={"w-full h-full flex flex-col items-center relative"}>
                {
                    messages.map((message, index) => (
                        <Message key={message.id}
                                 message={message}
                                 isFirstMessage={index === 0}
                        />
                    ))
                }
                <div className={`${!messages[messages.length - 1].isFromUser ? "bg-gray-300/50 dark:bg-gray-900/50" : "bg-gray-100/50 dark:bg-gray-700"} border-t border-gray-50 dark:border-gray-950 w-full min-h-[30vh] sm:min-h-[15vh]`}>
                </div>
            </div>
            <div className={"w-11/12 sm:w-9/12 lg:w-6/12 2xl:w-5/12 h-16 flex items-center justify-center absolute bottom-8"}>
                <div className="w-full h-full flex items-center justify-center relative">
                    <input
                        type="text"
                        className="focus:outline-none w-full h-full rounded-xl px-4 py-2 bg-gray-100 dark:bg-gray-700 shadow-md shadow-gray-400 dark:shadow-gray-950 pr-16"
                        placeholder="Type a message..."
                    />
                    <button type={"button"} className="absolute right-4 top-1/2 transform -translate-y-1/2" >
                        <SendIcon size={28} />
                    </button>
                </div>
            </div>
        </div>
    )
}

interface Message {
    id: number;
    content: string;
    isFromUser: boolean;
}

const Message = ({message, isFirstMessage}: {message: Message, isFirstMessage: boolean}) => {
    return (
        <div
            className={`${message.isFromUser ? "bg-gray-300/50 dark:bg-gray-900/50" : "bg-gray-100/50 dark:bg-gray-700"} 
                            w-full flex sm:flex-row flex-col sm:justify-center items-center sm:items-start py-6 text-md sm:relative group
                            ${!isFirstMessage && "border-t border-gray-50 dark:border-gray-950"}
                            `}>
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

const messages: Message[] = [
    {
        id: 1,
        content: "Hello, I'm a messageHello, I'm a messageHello, I'm a messageHello, I'm a message",
        isFromUser: true,
    },
    {
        id: 2,
        content: "Hello, I'm a messHello, I'm a messageHello, I'm a messageHello, I'm a messageHello, I'm a messageage",
        isFromUser: false,
    },
    {
        id: 3,
        content: "Hello, I'mHello, I'm a messageHello, I'm a messageHello, I'm a messageHello, I'm a messageHello, I'm a messageHello, I'm a messageHello, I'm a messageHello, I'm a messageHello, I'm a messageHello, I'm a message a message",
        isFromUser: true,
    },
    {
        id: 4,
        content: "Hello, IHello, I'm a messageHello, I'm a messageHello, I'm a messageHello, I'm a messageHello, I'm a message'm a message",
        isFromUser: false,
    },
    {
        id: 5,
        content: "Hello, I'mHello, I'm a messageHello, I'm a messageHello, I'm a messageHello, I'm a messageHello, I'm a message a message",
        isFromUser: true,
    },
    {
        id: 6,
        content: "Hello, I'm a meHello, I'm a messageHello, I'm a messageHello, I'm a messageHello, I'm a messageHello, I'm a messageHello, I'm a messageHello, I'm a messageHello, I'm a messageHello, I'm a messageHello, I'm a messageHello, I'm a messageHello, I'm a messageHello, I'm a messageHello, I'm a messageHello, I'm a messagessage",
        isFromUser: false,
    },
    {
        id: 5,
        content: "Hello, I'mHello, I'm a messageHello, I'm a messageHello, I'm a messageHello, I'm a messageHello, I'm a message a message",
        isFromUser: true,
    },
    {
        id: 6,
        content: "Hello, I'm a meHello, I'm a messageHello, I'm a messageHello, I'm a messageHello, I'm a messageHello, I'm a messageHello, I'm a messageHello, I'm a messageHello, I'm a messageHello, I'm a messageHello, I'm a messageHello, I'm a messageHello, I'm a messageHello, I'm a messageHello, I'm a messageHello, I'm a messagessage",
        isFromUser: false,
    },
    {
        id: 7,
        content: "Hello, I'mHello, I'm a messageHello, I'm a messageHello, I'm a messageHello, I'm a messageHello, I'm a message a message",
        isFromUser: true,
    },
    {
        id: 8,
        content: "Hello, I'm a meHello, I'm a messageHello, I'm a messageHello, I'm a messageHello, I'm a messageHello, I'm a messageHello, I'm a messageHello, I'm a messageHello, I'm a messageHello, I'm a messageHello, I'm a messageHello, I'm a messageHello, I'm a messageHello, I'm a messageHello, I'm a messageHello, I'm a messagessage",
        isFromUser: false,
    },
    {
        id: 9,
        content: "Hello, I'mHello, I'm a messageHello, I'm a messageHello, I'm a messageHello, I'm a messageHello, I'm a message a message",
        isFromUser: true,
    },
    {
        id: 10,
        content: "Hello, I'm a meHello, I'm a messageHello, I'm a messageHello, I'm a messageHello, I'm a messageHello, I'm a messageHello, I'm a messageHello, I'm a messageHello, I'm a messageHello, I'm a messageHello, I'm a messageHello, I'm a messageHello, I'm a messageHello, I'm a messageHello, I'm a messageHello, I'm a messagessage",
        isFromUser: false,
    },
    {
        id: 11,
        content: "Hello, I'mHello, I'm a messageHello, I'm a messageHello, I'm a messageHello, I'm a messageHello, I'm a message a message",
        isFromUser: true,
    },
    {
        id: 12,
        content: "Hello, I'm a meHello, I'm a messageHello, I'm a messageHello, I'm a messageHello, I'm a messageHello, I'm a messageHello, I'm a messageHello, I'm a messageHello, I'm a messageHello, I'm a messageHello, I'm a messageHello, I'm a messageHello, I'm a messageHello, I'm a messageHello, I'm a messageHello, I'm a messagessage",
        isFromUser: false,
    }
]