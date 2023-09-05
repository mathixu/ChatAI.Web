import React from "react";
import ChatSessionLink from "@/components/layout/history/chatSessionLink";
import ChatSession from "@/types/chatSession";

interface GroupedChatSessionsProps {
    chats: { [key: string]: ChatSession[] };
}

const GroupedChatSessions: React.FC<GroupedChatSessionsProps> = ({ chats }) => {
    return (
        <div className={"space-y-1"}>
            {Object.entries(chats).map(([label, sessions]) => (
                <div key={label}>
                    <p className={"text-sm"}>{label}</p>
                    {sessions.map((session) => (
                        <ChatSessionLink chatSession={session} key={session.id} isActive={false} />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default GroupedChatSessions;
