'use client'

import { useRouter } from "next/navigation"
import React from "react"

const ContactButton = () =>{
    const router = useRouter()
    function handleClick(){
        router.push('/contact')
    }

    return <button className=" text-gray-300 rounded-md px-3 py-2 text-sm font-medium" onClick={handleClick}>Contact</button>
}
export default ContactButton;