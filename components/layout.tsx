"use client";

import Header from "@/components/layout/header";
import Sidebar from "@/components/layout/sidebar";

export default function Layout({children}: { children: React.ReactNode } ) {
    return (
        <div>
            <Sidebar />
            <main className="sm:ml-96 h-screen">
                <Header />
                <div className={"bg-red-400 dark:bg-blue-400 h-[90vh] rounded-tl-xl p-4"}>
                    {children}
                </div>
            </main>
        </div>
    )
}

