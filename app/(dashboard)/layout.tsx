import { Metadata } from "next"
import React from "react"
import { AlignRight } from "lucide-react"

import { Search } from "@/app/(dashboard)/components/search"
import { UserNav } from "@/app/(dashboard)/components/user-nav"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Example dashboard app using the components.",
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className="flex-col md:flex">
        <div className="border-b">
          <div className="flex items-center w-full p-3 lg:px-5 lg:pl-3">
            <Image src="/next.svg" alt="Logo" width={40} height={40} />
            <Search className="mx-6" />
            <div className="flex items-center justify-between ml-auto space-x-4">
              <AlignRight className="lg:hidden" />
              <UserNav />
            </div>
          </div>
        </div>
      </div>
      {children}
    </>
  )
}
