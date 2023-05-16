import Link from "next/link"

import { cn } from "@/lib/utils"
import { AlignLeft, SearchIcon } from "lucide-react"
import { Search } from "./search"
import { UserNav } from "./user-nav"

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav className="fixed z-30 w-full bg-white border-b dark:bg-background">
      <div className="flex flex-wrap items-center justify-between mx-auto">
        <div className="w-full p-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <button className="p-2 mr-3 text-gray-600 rounded cursor-pointer hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-900 dark:hover:text-white lg:inline">
                <span className="sr-only">Toggle sidebar</span>

                <AlignLeft className="w-6 h-6 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
              </button>
              <img
                alt=""
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-6 mr-3 sm:h-8"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                DxForm
              </span>
              <form className="hidden ml-16 md:block">
                <Search />
              </form>
            </div>
            <div className="flex items-center lg:gap-3">
              <div className="flex items-center">
                <div className="p-2 text-gray-600 rounded cursor-pointer hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 lg:hidden">
                  <span className="sr-only">Search</span>
                  <SearchIcon className="w-6 h-6 " />
                </div>
              </div>
              <div className="hidden lg:block">
                <UserNav />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
