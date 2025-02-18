'use client'
import { signOut } from "next-auth/react"

const LogoutButton = () => {
  return (
    <button 
      onClick={() => signOut({ callbackUrl: '/' })}
      className="px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700 transition-colors"
    >
      Logout
    </button>
  )
}

export default LogoutButton