import React, { useState, useEffect } from "react";
import { useApiAuth } from "@/lib/hooks/useApiAuth";
import {groupChatsByDate, sortChatsByUpdatedAt} from "@/lib/functions/chatSessionUtils";
import GroupedChatSessions from "@/components/layout/history/groupedChatSessions";
import ChatSession from "@/types/chatSession";

export default function History() {

    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [isFailed, setIsFailed] = useState<boolean>(false);
    const [isSuccess, setIsSuccess] = useState<boolean>(false);

    const { getAllChats } = useApiAuth();
    const [chatSessions, setChatSessions] = useState<ChatSession[]>([]);

    useEffect(() => {
        const fetchAndSetChats = async () => {
            try {
                setIsSubmitting(true)
                const res = await getAllChats();

                const sortedChats = sortChatsByUpdatedAt(fakeSessions);

                setChatSessions(sortedChats);
                setIsSubmitting(false);
                setIsSuccess(true);
            } catch {
                setIsSubmitting(false);
                setIsFailed(true);
            }
        };

        fetchAndSetChats();
    }, []);

    const groupedChats = groupChatsByDate(chatSessions);

    return (
        <div className={"px-3 py-4 h-[85%] overflow-y-auto"}>
            {
                isSubmitting && <>Loading...</>
            }
            {
                isFailed && <>Failed to load chats</>
            }
            {
                isSuccess && <GroupedChatSessions chats={groupedChats} />
            }
        </div>
    );
}

const fakeSessions: ChatSession[] = [
    {
        forkedChatSessions: null,
        title: null,
        systemInstruction: "Tu es développeur 3",
        model: "gpt432k",
        forkedFromMessageId: null,
        createdAt: new Date("2023-08-28T08:33:47.521829"),
        updatedAt: new Date("2023-08-28T08:33:47.521829"),
        id: "08dba7a1-7f96-4be9-8309-f17e44d8f785",
        messages: null
    },
    {
        forkedChatSessions: null,
        title: "string 2",
        systemInstruction: "Tu es développeur 2",
        model: "gpt432k",
        forkedFromMessageId: null,
        createdAt: new Date("2023-08-28T08:33:43.948383"),
        updatedAt: new Date("2023-08-28T08:33:43.948383"),
        id: "08dba7a1-7d75-4797-8b2f-9eb39e757caa",
        messages: null
    },
    {
        forkedChatSessions: null,
        title: "string",
        systemInstruction: "Tu es développeur",
        model: "gpt432k",
        forkedFromMessageId: null,
        createdAt: new Date("2023-08-28T08:33:38.03219"),
        updatedAt: new Date("2023-08-28T08:33:38.032191"),
        id: "08dba7a1-79e7-431e-82a5-8a0a813883de",
        messages: null
    },
    {
        forkedChatSessions: null,
        title: "string",
        systemInstruction: "Tu es développeur",
        model: "gpt432k",
        forkedFromMessageId: null,
        createdAt: new Date("2023-08-28T08:33:38.03219"),
        updatedAt: new Date("2023-08-27T08:33:38.032191"),
        id: "08dba7a1-79e7-431e-82a5-8a0a813883da",
        messages: null
    },
    {
        forkedChatSessions: null,
        title: "string",
        systemInstruction: "Tu es développeur",
        model: "gpt432k",
        forkedFromMessageId: null,
        createdAt: new Date("2023-08-28T08:33:38.03219"),
        updatedAt: new Date("2023-08-27T08:33:38.032191"),
        id: "08dba7a1-79e7-431e-82a5-8a0a813883wq",
        messages: null
    },
    {
        forkedChatSessions: null,
        title: "string",
        systemInstruction: "Tu es développeur",
        model: "gpt432k",
        forkedFromMessageId: null,
        createdAt: new Date("2023-08-28T08:33:38.03219"),
        updatedAt: new Date("2023-08-26T08:33:38.032191"),
        id: "08dba7a1-79e7-431e-82a5-8a0a81aa83da",
        messages: null
    },
    {
        forkedChatSessions: null,
        title: "string",
        systemInstruction: "Tu es développeur",
        model: "gpt432k",
        forkedFromMessageId: null,
        createdAt: new Date("2023-08-28T08:33:38.03219"),
        updatedAt: new Date("2023-08-24T08:33:38.032191"),
        id: "08dba7a1-79e7-431e-82a5-7a0a81aa83da",
        messages: null
    },
    {
        forkedChatSessions: null,
        title: "string",
        systemInstruction: "Tu es développeur",
        model: "gpt432k",
        forkedFromMessageId: null,
        createdAt: new Date("2023-08-28T08:33:38.03219"),
        updatedAt: new Date("2023-07-30T08:33:38.032191"),
        id: "08dba7a1-79e7-431e-82a5-7a0a81qsd3da",
        messages: null
    },
    {
        forkedChatSessions: null,
        title: "string",
        systemInstruction: "Tu es développeur",
        model: "gpt432k",
        forkedFromMessageId: null,
        createdAt: new Date("2023-08-28T08:33:38.03219"),
        updatedAt: new Date("2023-07-28T08:33:38.032191"),
        id: "08dba7a1-79e7-431e-82a5-7a0a41qsd3da",
        messages: null
    },
    {
        forkedChatSessions: null,
        title: "string",
        systemInstruction: "Tu es développeur",
        model: "gpt432k",
        forkedFromMessageId: null,
        createdAt: new Date("2023-08-28T08:33:38.03219"),
        updatedAt: new Date("2023-07-15T08:33:38.032191"),
        id: "08dba7a1-79e7-431e-82b5-7a0a81qsd3da",
        messages: null
    },
    {
        forkedChatSessions: null,
        title: "string",
        systemInstruction: "Tu es développeur",
        model: "gpt432k",
        forkedFromMessageId: null,
        createdAt: new Date("2023-08-28T08:33:38.03219"),
        updatedAt: new Date("2023-07-13T08:33:38.032191"),
        id: "08dba7a1-79e7-431e-82c5-7a0a81qsd3da",
        messages: null
    },
    {
        forkedChatSessions: null,
        title: "string",
        systemInstruction: "Tu es développeur",
        model: "gpt432k",
        forkedFromMessageId: null,
        createdAt: new Date("2023-08-28T08:33:38.03219"),
        updatedAt: new Date("2023-07-12T08:33:38.032191"),
        id: "08dbaaz1-79e7-431e-82a5-7a0a81qsd3da",
        messages: null
    },
    {
        forkedChatSessions: null,
        title: "string",
        systemInstruction: "Tu es développeur",
        model: "gpt432k",
        forkedFromMessageId: null,
        createdAt: new Date("2023-08-28T08:33:38.03219"),
        updatedAt: new Date("2023-07-28T08:33:38.032191"),
        id: "08dbaaa1-79e7-431e-82a5-7a0a81qsd3da",
        messages: null
    },
    {
        forkedChatSessions: null,
        title: "string",
        systemInstruction: "Tu es développeur",
        model: "gpt432k",
        forkedFromMessageId: null,
        createdAt: new Date("2023-08-28T08:33:38.03219"),
        updatedAt: new Date("2023-07-28T08:33:38.032191"),
        id: "08dbaaa1-79e7-431e-8aa5-7a0a81qsd3da",
        messages: null
    },
    {
        forkedChatSessions: null,
        title: null,
        systemInstruction: "Tu es développeur",
        model: "gpt432k",
        forkedFromMessageId: null,
        createdAt: new Date("2023-08-28T08:33:38.03219"),
        updatedAt: new Date("2023-07-28T08:33:38.032191"),
        id: "08dbaaa1-79e7-431e-a2a5-7a0a81qsd3da",
        messages: null
    },
    {
        forkedChatSessions: null,
        title: null,
        systemInstruction: "Tu es développeur",
        model: "gpt432k",
        forkedFromMessageId: null,
        createdAt: new Date("2023-08-28T08:33:38.03219"),
        updatedAt: new Date("2023-07-28T08:33:38.032191"),
        id: "08dbaaa1-79e7-431e-82a5-7a0a81qsaada",
        messages: null
    },
    {
        forkedChatSessions: null,
        title: "string",
        systemInstruction: "Tu es développeur",
        model: "gpt432k",
        forkedFromMessageId: null,
        createdAt: new Date("2023-08-28T08:33:38.03219"),
        updatedAt: new Date("2023-08-03T08:33:38.032191"),
        id: "08dba7a1-79e7-431e-82a5-7a0aaaasd3da",
        messages: null
    }
];
