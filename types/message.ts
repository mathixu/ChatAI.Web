import BaseAuditableEntity from "@/types/baseAuditableEntity";

export default interface Message extends BaseAuditableEntity {
    content: string;
    isFromUser: boolean;
    chatSessionId: string;
}