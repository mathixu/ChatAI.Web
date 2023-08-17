import React from "react";
import ShowSidebarIcon from "@/assets/icons/showSidebarIcon";

interface Props {
    buttonRef: React.MutableRefObject<HTMLButtonElement | null>;
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Header({buttonRef, isOpen, setIsOpen}: Props) {

    const ChatTitle = ({ className }: { className?: string }) => (
        <h2 className={`${className} truncate`}>
            <span className="mr-2 lg:mr-6">#</span>
            New Chat 08/15 17h14
        </h2>
    );

    return (
        <header className={"ml-3 h-[10vh] lg:ml-96"}>
            <div className={"lg:hidden flex items-center space-x-3 pr-2 h-full"}>
                <button
                    ref={buttonRef}
                    onClick={() => setIsOpen(!isOpen)}
                    data-drawer-target="default-sidebar"
                    data-drawer-toggle="default-sidebar"
                    aria-controls="default-sidebar"
                    type="button"
                    className="inline-flex lg:hidden items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                >
                    <span className="sr-only">Open sidebar</span>
                    <ShowSidebarIcon size={28} />
                </button>
                <ChatTitle className="text-xl font-medium w-10/12"/>
                <Model />
                <EstimatedCost />
            </div>

            <div className="hidden lg:flex items-center justify-between space-x-4 pr-8 h-full">
                <div className={"flex items-center space-x-4 lg:w-10/12 w-full"}>
                    <ChatTitle className="text-2xl font-medium" />
                    <Model />
                </div>
                <EstimatedCost />
            </div>
        </header>
    )
}

const Model = () => {
    return (
        <div className={"hidden sm:block min-w-fit bg-gray-300 w-fit dark:bg-gray-700 px-2 py-1 rounded-2xl"}>
            <p className={"text-sm"}>gpt-3.5-turbo</p>
        </div>
    )
}

const EstimatedCost = () => {
    return (
        <div className={"flex flex-col items-center bg-gray-300 dark:bg-gray-700 px-3 lg:px-2 py-1 rounded-2xl min-w-fit"}>
            <p className={"text-center text-sm font-bold flex items-center"}><span className={"hidden lg:block lg:mr-2"}>Cost: </span>$0.016</p>
            <p className={"text-center text-sm hidden lg:block"}>for 8 messages</p>
        </div>
    )
}