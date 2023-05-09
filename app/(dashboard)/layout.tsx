import { Metadata } from "next"
import React from "react"
import { AlignRight } from "lucide-react"

import { MainNav } from "@/app/(dashboard)/overview/components/main-nav"
import { Search } from "@/app/(dashboard)/overview/components/search"
import TeamSwitcher from "@/app/(dashboard)/overview/components/team-switcher"
import { UserNav } from "@/app/(dashboard)/overview/components/user-nav"

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
          <div className="flex items-center h-16 px-4">
            <TeamSwitcher />
            <MainNav className="mx-6" />
            <div className="flex items-center justify-between ml-auto space-x-4">
              <Search />
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
