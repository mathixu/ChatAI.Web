import {axiosAuth} from "@/lib/api";
import ChatSession from "@/types/chatSession";
import {ChatSessionDTO} from "@/types/DTOs/chatSessionDTO";
import {MessageDTO} from "@/types/DTOs/messageDTO";
import Message from "@/types/message";

export const useApiAuth = () => {

    const getAllChats = async (): Promise<ChatSession[]> => {
        const response = await axiosAuth.get<ChatSession[]>("/chat");

        return response.data.map((chat) => {
            return {
                ...chat,
                updatedAt: new Date(chat.updatedAt),
                createdAt: new Date(chat.createdAt)
            }
        });
    }

    const getChat = async (id: string): Promise<ChatSession> => {
        const response = await axiosAuth.get<ChatSession>(`/chat/${id}`);

        return {...response.data, updatedAt: new Date(response.data.updatedAt), createdAt: new Date(response.data.createdAt)};
    }

    const createChatSession = async (chatSessionDTO: ChatSessionDTO): Promise<ChatSession> => {
        const response = await axiosAuth.post<ChatSession>("/chat", chatSessionDTO);

        return {...response.data, updatedAt: new Date(response.data.updatedAt), createdAt: new Date(response.data.createdAt)};
    }

    const sendMessage = async (sessionId: string, messageDTO: MessageDTO): Promise<Message> => {
        const response = await axiosAuth.post<Message>(`/chat/${sessionId}/messages`, messageDTO);

        return {...response.data, createdAt: new Date(response.data.createdAt), updatedAt: new Date(response.data.updatedAt)};
    }

    return {getAllChats, getChat, createChatSession, sendMessage}
}