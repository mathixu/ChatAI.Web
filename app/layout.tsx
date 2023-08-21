import './globals.css'
import type { Metadata } from 'next'
import React from "react";
import {AuthContextProvider} from "@/contexts/authContext";

export const metadata: Metadata = {
  title: 'ChatAI - mathixu.dev',
  description: 'ChatAI - mathixu.dev',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={"dark"}>
      <body className={"bg-gray-100 dark:bg-gray-900 h-screen text-gray-900 dark:text-gray-200 overflow-y-hidden"}>
        <AuthContextProvider>
          {children}
        </AuthContextProvider>
      </body>
    </html>
  )
}
