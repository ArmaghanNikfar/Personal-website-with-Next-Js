'use client'
import React from 'react'
import { signIn , signOut , useSession } from 'next-auth/react';

function SignInButton() {
    const {data:session} = useSession()
  return (
    <div>
        {session?(
               <div className="relative ml-3">
               <div>
                 <button 
                  type="button"
                  onClick={()=> signOut()}
                  className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="false">
                   <span className="absolute -inset-1.5"></span>
                   <span className="sr-only">Open user menu</span>
                   <img className="h-8 w-8 rounded-full" src="/IMG_6740.jpg" alt="" />
                 </button>

               </div>
             </div>
        ):(
            <div className="relative ml-3">
            <div>
              <button 
               type="button"
               onClick={()=> signIn()}
               className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="false">
                <span className="absolute -inset-1.5"></span>
                <span className="sr-only">Open user menu</span>
                <img className="h-8 w-8 rounded-full" src="/IMG_6740.jpg" alt="" />
              </button>

            </div>
          </div>
        )}
    </div>
  )
}
export default SignInButton