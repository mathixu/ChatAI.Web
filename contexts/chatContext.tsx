import {createContext, useContext, useState} from "react";
import ChatSession from "@/types/chatSession";

interface ChatContextData {
    chatSession: ChatSession | null;
    handleChatSession: (session: ChatSession | null) => void;
}

export const ChatContext = createContext<ChatContextData>({} as ChatContextData);

export const useChatContext = () => {
    const context = useContext(ChatContext);
    if(context === undefined) {
        throw new Error("useChatContext must be used within an ChatContextProvider")
    }

    return context;
}

export const ChatContextProvider = ({children}: {children: React.ReactNode}) => {

    const [localChatSession, setLocalChatSession] = useState<ChatSession | null>(null);

    const handleChatSession = (session: ChatSession | null) => {
        setLocalChatSession(session ? {...session} : null);

        console.log("ChatSession: ", session)
    }

    const values: ChatContextData = {
        chatSession: localChatSession,
        handleChatSession
    }

    return (
        <ChatContext.Provider value={values}>
            {children}
        </ChatContext.Provider>
    )
}