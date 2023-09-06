import SendIcon from "@/assets/icons/sendIcon";
import {useChatContext} from "@/contexts/chatContext";
import {useForm} from "react-hook-form";
import {useApiAuth} from "@/lib/hooks/useApiAuth";
import {ChatSessionDTO} from "@/types/DTOs/chatSessionDTO";

interface FormFields {
    content: string;
}

export default function ChatInput() {

    const {chatSession, handleChatSession} = useChatContext();

    const {register, handleSubmit} = useForm<FormFields>();

    const {createChatSession, sendMessage} = useApiAuth();

    const onSubmit = async (data: FormFields) => {
        try {
            let chatSessionId = chatSession?.id;

            if(!chatSessionId) {
                const createdChatSession = await createChatSession({...chatSession} as ChatSessionDTO);

                chatSessionId = createdChatSession.id;

                handleChatSession(createdChatSession);
            }

            await sendMessage(chatSessionId!, {content: data.content, isFromUser: true});
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className={"absolute bottom-8 w-11/12 sm:w-9/12 lg:w-6/12 2xl:w-5/12 h-16 flex items-center justify-center "}>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full h-full flex items-center justify-center relative">
                <input
                    autoComplete={"off"}
                    type="text"
                    className="focus:outline-none w-full h-full rounded-xl px-4 py-2 bg-gray-100 dark:bg-gray-700 shadow-md shadow-gray-400 dark:shadow-gray-950 pr-16"
                    placeholder="Type a message..."
                    { ...register("content", {
                        required: "Please enter a message"
                    })}
                />
                <button type={"submit"} className="absolute right-4 top-1/2 transform -translate-y-1/2" >
                    <SendIcon size={28} />
                </button>
            </form>
        </div>
    )
}