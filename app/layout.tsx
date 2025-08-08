import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Toaster } from "@/components/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Global 50:50 Concepts Nig. Ltd. - Premium Construction Solutions",
  description:
    "Official distributor for Nigeria's leading cement manufacturers. Quality construction solutions, cement distribution, and building services since 2012.",
  keywords: "cement, construction, Nigeria, Lafarge, Dangote, BUA, Mangal, building materials, plastic products",
    generator: ''
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}
