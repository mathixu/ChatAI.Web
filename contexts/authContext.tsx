"use client";
import {createContext, useContext, useState} from "react";

interface AuthContextData {
    isAuth: boolean;
    signIn: () => void;
    signOut: () => void;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if(context === undefined) {
        throw new Error("useAuthContext must be used within an AuthContextProvider")
    }

    return context;
}

export const AuthContextProvider = ({children}: {children: React.ReactNode}) => {

    const [isAuth, setIsAuth] = useState<boolean>(false);

    const signIn = () => {
        setIsAuth(true);
    }

    const signOut = () => {
        setIsAuth(false);
    }

    const values: AuthContextData = {
        isAuth,
        signIn,
        signOut
    }

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}