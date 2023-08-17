"use client";
import Sidebar from "@/components/layout/sidebar";

export default function Layout({children}: { children: React.ReactNode } ) {
    return (
        <div>
            <Sidebar />
            <main className="lg:ml-96 h-[90vh] overflow-hidden">
                {children}
            </main>
        </div>
    )
}

