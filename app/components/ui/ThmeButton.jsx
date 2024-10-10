"use client"

import { DarkMode, DarkModeSharp, LightMode } from "@mui/icons-material";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeButton = () =>{
    const toogleTheme = () =>{
        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
    }
    const [mounted , setmounted] = useState(false)
    useEffect(()=>setmounted(true),[])
    if(!mounted){
        return null
    }
    const {resolvedTheme, setTheme} = useTheme()
    return <button onClick={toogleTheme }>
        {resolvedTheme ==='dark'?(<LightMode/>):(<DarkModeSharp style={{color:"white"}}/>)}</button>
}
export default ThemeButton