import {axiosAuth} from "@/lib/api";
import ChatSession from "@/types/chatSession";

export const useApiAuth = () => {

    const getAllChats = async (): Promise<ChatSession[]> => {
        const response = await axiosAuth.get<ChatSession[]>("/chat");

        return response.data;
    }

    const getChat = async (id: string): Promise<ChatSession> => {
        const response = await axiosAuth.get<ChatSession>(`/chat/${id}`);

        return response.data;
    }

    return {getAllChats, getChat}
}