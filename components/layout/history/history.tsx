import ChatSessionLink from "@/components/layout/history/chatSessionLink";

export default function History() {
    return (
        <div className={"px-3 py-4 h-[85%] overflow-y-auto"}>
            <div className={"space-y-1"}>
                <p className={"text-sm"}>Today</p>
                <ChatSessionLink isActive={true}/>
                <ChatSessionLink isActive={false}/>
                <p className={"text-sm"}>Yesterday</p>
                <ChatSessionLink isActive={false}/>
                <ChatSessionLink isActive={false}/>
                <ChatSessionLink isActive={false}/>
                <ChatSessionLink isActive={false}/>
                <p className={"text-sm"}>Previous 7 days</p>
                <ChatSessionLink isActive={false}/>
                <ChatSessionLink isActive={false}/>
                <ChatSessionLink isActive={false}/>
                <ChatSessionLink isActive={false}/>
                <ChatSessionLink isActive={false}/>
                <ChatSessionLink isActive={false}/>
                <ChatSessionLink isActive={false}/>
                <ChatSessionLink isActive={false}/>
                <p className={"text-sm"}>Previous 30 days</p>
                <ChatSessionLink isActive={false}/>
                <ChatSessionLink isActive={false}/>
                <ChatSessionLink isActive={false}/>
                <ChatSessionLink isActive={false}/>
                <ChatSessionLink isActive={false}/>
                <ChatSessionLink isActive={false}/>
                <ChatSessionLink isActive={false}/>
                <ChatSessionLink isActive={false}/>
            </div>
        </div>
    )
}

