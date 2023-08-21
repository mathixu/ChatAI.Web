import React, {useState} from "react";
import ProfileIcon from "@/assets/icons/profileIcon";
import Link from "next/link";
import SettingsIcon from "@/assets/icons/settingsIcon";
import LogoutIcon from "@/assets/icons/logoutIcon";
import Logout from "@/lib/logout";
import {useRouter} from "next/navigation";
import {useAuthContext} from "@/contexts/authContext";

export default function AccountMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const router = useRouter();

    const {signOut} = useAuthContext();

    const logoutUser = () => {
        Logout();
        signOut();
        router.push("/signin");
    }

    return (
        <>
            <div className={"flex items-center border-2 rounded-lg border-gray-500 dark:border-gray-300"}>
                <button onClick={toggleMenu} type="button" className={"p-1"}>
                    <ProfileIcon size={28} />
                </button>
            </div>
            {isMenuOpen && (
                <div className={"absolute inset-x-0 top-16 bg-gray-50 dark:bg-gray-950 rounded-lg shadow-lg p-2 mt-2"}>
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
                            <button onClick={logoutUser} className={"w-full flex items-center text-lg space-x-3 p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800/50"}>
                                <LogoutIcon size={24}/>
                                <span>Logout</span>
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </>
    )
}
