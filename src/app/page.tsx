import { LoginForm } from "@/components/login-form"
import type { Metadata } from "next";

export const metadata: Metadata ={
  title:"NextAuth - Login",
}


export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-slate-800 p-6 md:p-10">
      <LoginForm />
    </div>
  )
}