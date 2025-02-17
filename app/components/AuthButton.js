'use client'

import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'

export default function AuthButton() {
  const { data: session } = useSession()

  if (session) {
    return (
      <button 
        onClick={() => signOut()}
        className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
      >
        Sign Out
      </button>
    )
  }
  return (
    <div className="space-x-4">
      <Link 
        href="/login"
        className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
      >
        Login
      </Link>
      <Link 
        href="/signup"
        className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600"
      >
        Sign Up
      </Link>
    </div>
  )
}