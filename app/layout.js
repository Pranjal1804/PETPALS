import "./globals.css";
import Chatbot from "@/Components/Chatbot";
import Header from "@/Components/Header";
import { AuthProvider } from "./providers/auth-provider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Header />
          {children}
          <Chatbot />
        </AuthProvider>
      </body>
    </html>
  );
}