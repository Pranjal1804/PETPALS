// app/components/AuthButton.js
'use client'
import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'

export default function AuthButton() {
  const { data: session } = useSession()

  if (session) {
    return (
      <button 
        onClick={() => signOut({ callbackUrl: '/' })}
        className="px-4 py-2 text-white hover:text-brown"
      >
        Sign Out
      </button>
    )
  }

  return (
    <div className="space-x-4">
      <Link 
        href="/login"
        className="px-4 py-2 text-white hover:text-brown"
      >
        Login
      </Link>
      <Link 
        href="/signup"
        className="px-4 py-2 text-white hover:text-brown"
      >
        Sign Up
      </Link>
    </div>
  )
}