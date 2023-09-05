import ChatSession from "@/types/chatSession";

export const sortChatsByUpdatedAt = (chats: ChatSession[]): ChatSession[] => {
    return chats.sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
};

export const groupChatsByDate = (sessions: ChatSession[]): { [key: string]: ChatSession[] } => {
    const now = new Date();
    const grouped: { [key: string]: ChatSession[] } = {};

    for (let session of sessions) {
        const label = getLabelForSession(session, now);

        if (!grouped[label]) {
            grouped[label] = [];
        }
        grouped[label].push(session);
    }
    return grouped;
};

const getLabelForSession = (session: ChatSession, now: Date): string => {
    const updatedAt = new Date(session.updatedAt);
    const diff = (now.getTime() - updatedAt.getTime()) / (1000 * 60 * 60 * 24);

    if (diff < 1) return 'Today';
    if (diff < 2) return 'Yesterday';
    if (diff < 7) return 'Previous 7 days';
    if (diff < 30 && monthIsSame(updatedAt, now)) return 'Previous 30 days';
    return new Intl.DateTimeFormat('en-US', { month: 'long' }).format(updatedAt);
};

const monthIsSame = (date1: Date, date2: Date): boolean => {
    return date1.getMonth() === date2.getMonth() && date1.getFullYear() === date2.getFullYear();
};

export const getDefaultChatSessionTitle = (session: ChatSession): string => {
    const createdAt = session.createdAt;
    const month = String(createdAt.getMonth() + 1).padStart(2, '0');
    const day = String(createdAt.getDate()).padStart(2, '0');
    const hours = String(createdAt.getHours()).padStart(2, '0');
    const minutes = String(createdAt.getMinutes()).padStart(2, '0');

    return `New Chat ${month}/${day} ${hours}:${minutes}`;
}