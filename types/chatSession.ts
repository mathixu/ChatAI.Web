import BaseAuditableEntity from "@/types/baseAuditableEntity";
import Message from "@/types/message";

export default interface ChatSession extends BaseAuditableEntity {
    title: string | null;
    systemInstruction: string | null;
    model: string;
    messages: Message[] | null;
    forkedChatSessions: any[] | null;
    forkedFromMessageId: string | null;
}