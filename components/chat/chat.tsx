"use client";
import {useEffect, useRef, useState} from "react";
import {useChatContext} from "@/contexts/chatContext";
import LogoIcon from "@/components/layout/logoIcon";
import {useSearchParams} from "next/navigation";
import {useApiAuth} from "@/lib/hooks/useApiAuth";
import ChatInput from "@/components/chat/chatInput";
import MessageList from "@/components/chat/messageList";

export default function Chat() {

    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [isFailed, setIsFailed] = useState<boolean>(false);
    const [isSuccess, setIsSuccess] = useState<boolean>(false);

    const searchParams = useSearchParams();
    const {handleChatSession, chatSession} = useChatContext();
    const {getChat} = useApiAuth();

    useEffect(() => {
        const fetchChat = async (id: string) => {
            setIsSuccess(false)
            setIsFailed(false)
            try {
                setIsSubmitting(true)
                const res = await getChat(id);

                handleChatSession(res);
                setIsSubmitting(false);
                setIsSuccess(true)
            } catch {
                setIsFailed(true);
                setIsSubmitting(false);
                return;
            }
        }

        const chatId = searchParams.get("c");
        if (chatId) {
            fetchChat(chatId);
        } else {
            handleChatSession(null);
            setIsSuccess(true);
        }
    }, [searchParams]);

    const endOfMessagesRef = useRef<any>(null);

    useEffect(() => {
        if (endOfMessagesRef.current) {
            endOfMessagesRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [chatSession?.messages]);

    return (
        <div className={"flex items-center justify-center bg-gray-200 dark:bg-gray-800 h-[90vh] rounded-t-xl mx-0 md:mx-2 lg:mr-4 overflow-y-auto"}>
            <div className={"w-full h-full flex flex-col items-center relative"}>
                { chatSession?.messages?.length ? <MessageList messages={chatSession.messages} /> : <LogoIcon /> }
                <div ref={endOfMessagesRef}></div>
            </div>
            <ChatInput />
        </div>
    )
}