"use client";
import {useLayoutEffect, useState} from "react";
import MoonIcon from "@/assets/icons/moonIcon";
import SunIcon from "@/assets/icons/sunIcon";

export default function ThemeSwitcher() {
    const [isDarkTheme, setIsDarkTheme] = useState<boolean>(true);

    useLayoutEffect(() => {
        setIsDarkTheme(document.documentElement.classList.contains('dark'));
    }, []);

    function toggleThemeInState() {
        setIsDarkTheme(_ => document.documentElement.classList.toggle('dark'));
    }

    function setLightTheme() {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
    }

    function setDarkTheme() {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
    }

    function processThemeChange() {
        const currentThemeInLocalStorage = localStorage.getItem('color-theme');

        if (currentThemeInLocalStorage) {
            currentThemeInLocalStorage === 'light' ? setDarkTheme() : setLightTheme();
        } else {
            document.documentElement.classList.contains('dark') ? setLightTheme() : setDarkTheme();
        }

        toggleThemeInState();
    }

    return (
        <div className={isDarkTheme ? 'bg-gray-900' : 'bg-gray-100'}>
            <button
                id="theme-toggle"
                onClick={processThemeChange}
                type="button"
                className={`${isDarkTheme ? 'text-gray-300 border-gray-300' : 'text-gray-800 border-gray-500'} border-2 rounded-lg text-sm p-1`}
            >
                <div className={`h-full w-full ${isDarkTheme ? "hidden" : ""}`}>
                    <SunIcon size={28} />
                </div>
                <div className={`h-full w-full ${isDarkTheme ? "" : "hidden"}`}>
                    <MoonIcon size={28} />
                </div>
            </button>
        </div>
    );
}