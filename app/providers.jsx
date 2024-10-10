"use client"
import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";

//for nest server components inside client components

const Providers = ({children}) =>{
return (<ThemeProvider >
    <SessionProvider>
    {children}
        </SessionProvider>
        </ThemeProvider>)
}
export default Providers