import LogoIcon from "@/components/layout/logoIcon";
import ThemeSwitcher from "@/components/layout/ThemeSwitcher";
import React, {useEffect, useRef, useState} from "react";
import History from "@/components/layout/history/history";
import NewChatButton from "@/components/layout/newChatButton";
import CloseIcon from "@/assets/icons/closeIcon";
import Header from "@/components/layout/header";
import AccountMenu from "@/components/layout/menu/accountMenu";


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
            <Header buttonRef={buttonRef} isOpen={isOpen} setIsOpen={setIsOpen} />
            <Aside isOpen={isOpen}>
                <div className="h-[10vh] flex items-center justify-between px-6 lg:px-0 lg:justify-evenly">
                    <LogoIcon />
                    <div className={"flex items-center space-x-4"}>
                        <AccountMenu/>
                        <ThemeSwitcher />
                        <div className={"lg:hidden flex items-center border-2 rounded-lg border-gray-500 dark:border-gray-300"}>
                            <button onClick={() => setIsOpen(false)} type="button" className={"p-1"}>
                                <CloseIcon size={28} />
                            </button>
                        </div>
                    </div>
                </div>
                <div className={"h-[90vh] flex flex-col justify-end justify-start pt-4"}>
                    <NewChatButton />
                    <History />
                    <Copyright />
                </div>
            </Aside>
        </>
    )
}

const Copyright = () => {
    return (
        <div className={"h-[10%] flex items-center justify-center"}>
            <p>© mathixu.dev 2023</p>
        </div>
    )
}


const Aside = ({children, isOpen}: { children: React.ReactNode, isOpen: boolean }) => {
    return (
        <aside id="default-sidebar"
            className={`bg-gray-100 dark:bg-gray-900 fixed top-0 left-0 z-40 w-96 h-screen transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:shadow-none shadow-xl`}
            aria-label="Sidebar">
            <div className="h-full">
                {children}
            </div>
        </aside>
    )
}