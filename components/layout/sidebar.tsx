import LogoIcon from "@/components/layout/logoIcon";
import ThemeSwitcher from "@/components/layout/ThemeSwitcher";
import React, {useEffect, useRef, useState} from "react";
import History from "@/components/layout/history/history";
import NewChatButton from "@/components/layout/newChatButton";


export default function Sidebar() {

    const [isOpen, setIsOpen] = useState<boolean>(false)

    const buttonRef = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
        const handleDocumentClick = (event: MouseEvent) => {
            if (!document.getElementById("default-sidebar")?.contains(event.target as Node) &&
                !buttonRef.current?.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }

        document.addEventListener('click', handleDocumentClick);

        return () => {
            document.removeEventListener('click', handleDocumentClick);
        }
    }, []);

    return (
        <>
            <button ref={buttonRef}
                onClick={() => setIsOpen(!isOpen)}
                data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <span className="sr-only"> Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                     xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" fillRule="evenodd"
                          d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>
            <Aside isOpen={isOpen}>
                <div className="h-[10vh] flex items-center justify-evenly">
                    <LogoIcon />
                    <ThemeSwitcher />
                </div>
                <div className={"h-[90vh] flex flex-col justify-start py-4"}>
                    <NewChatButton />
                    <History />
                </div>
            </Aside>
        </>
    )
}



const Aside = ({children, isOpen}: { children: React.ReactNode, isOpen: boolean }) => {
    return (
        <aside id="default-sidebar"
            className={`fixed top-0 left-0 z-40 w-96 h-screen transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0 sm:shadow-none shadow-xl`}
            aria-label="Sidebar">
            <div className="h-full">
                {children}
            </div>
        </aside>
    )
}