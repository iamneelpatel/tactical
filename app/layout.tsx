import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@vercel/analytics/react"
import ConfidentialityNotification from "@/components/confidentiality-notification"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "TacticalReality Simulations",
  description: "Advanced AI-Powered Defense Simulation Systems",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Navbar />
          {children}
          <Footer />
          <ConfidentialityNotification />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}

