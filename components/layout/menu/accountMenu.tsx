import React, {useState} from "react";
import ProfileIcon from "@/assets/icons/profileIcon";
import MoreDotIcon from "@/assets/icons/moreDotIcon";
import Link from "next/link";
import SettingsIcon from "@/assets/icons/settingsIcon";
import LogoutIcon from "@/assets/icons/logoutIcon";

export default function AccountMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <div className={"relative pt-3 flex items-center justify-center mx-3 p-1 border-t border-gray-400/50 h-fit"}>
            <button
                onClick={toggleMenu}
                type={"button"} className={"w-full p-3 rounded-xl hover:bg-gray-200/50 dark:hover:bg-gray-800/50 flex items-center justify-between px-6"}>
                <div className={"flex space-x-2 items-center"}>
                    <ProfileIcon size={24} />
                    <p className={"font-medium"}>Mathixu Dev</p>
                </div>
                <MoreDotIcon size={20} />
            </button>

            {isMenuOpen && (
                <div className={"absolute inset-x-0 -top-44 bg-gray-50 dark:bg-gray-950 rounded-lg shadow-sm p-2 mt-2"}>
                    <ul className={"space-y-2"}>
                        <li>
                            <Link href={"/account"} className={"flex items-center text-lg space-x-3 p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800/50"}>
                                <ProfileIcon size={24}/>
                                <span>My Account</span>
                            </Link>
                        </li>
                        <li>
                            <Link href={"/settings"} className={"flex items-center text-lg space-x-3 p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800/50"}>
                                <SettingsIcon size={24}/>
                                <span>My Settings</span>
                            </Link>
                        </li>
                        <hr className={"border-gray-900 dark:border-gray-200"}/>
                        <li>
                            <Link href={"/logout"} className={"flex items-center text-lg space-x-3 p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800/50"}>
                                <LogoutIcon size={24}/>
                                <span>Logout</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    )
}
