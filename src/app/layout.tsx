import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import "./globals.css";
import { AppSidebar } from "@/components/app-sidebar";
import { ThemeProvider } from "next-themes";
import { ModeToggle } from "@/components/mode-toggle";
import type { Metadata } from 'next';

export const metadata: Metadata ={
  title: "NextAuth",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className={`antialiased`}>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
