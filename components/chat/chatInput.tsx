import SendIcon from "@/assets/icons/sendIcon";

export default function ChatInput() {
    return (
        <div className={"absolute bottom-8 w-11/12 sm:w-9/12 lg:w-6/12 2xl:w-5/12 h-16 flex items-center justify-center "}>
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
    )
}