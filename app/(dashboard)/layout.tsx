import { Metadata } from 'next'
import React from 'react'

import { MainNav } from './components/main-nav'
import { SideBar } from './components/sidebar'

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Example dashboard app using the components.',
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <MainNav />
      <div className="flex items-start pt-16">
        <SideBar />
        <main className="relative w-full h-full overflow-y-auto lg:ml-64">
          <div className="px-4 pt-6 space-y-4 md:p-8">{children}</div>
        </main>
      </div>
    </>
  )
}
