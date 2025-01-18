"use client"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Chatbot from "@/Components/Chatbot";
import Header from "@/Components/Header";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Header />
        {children}
        
        <Chatbot />
      </body>
    </html>
  );
}
