"use client"
import Link from "next/link"
import { HiChartPie, HiCog6Tooth, HiUsers } from "react-icons/hi2"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

type Menu = {
  label: string
  icon: React.ReactNode
  href: string
  children?: Menu[]
}

const menus: Menu[] = [
  {
    label: "Overview",
    icon: <HiChartPie className="w-5 h-5 text-gray-500" />,
    href: "/overview",
  },
  {
    label: "Customers",
    icon: <HiUsers className="w-5 h-5 text-gray-500" />,
    href: "/customers",
  },
  {
    label: "Settings",
    icon: <HiCog6Tooth className="w-5 h-5 text-gray-500" />,
    href: "/settings",
  },
]

export function SideBar() {
  const currentUrl = usePathname()
  return (
    <div className="lg:!block hidden">
      <aside className="fixed top-0 left-0 z-20 flex flex-col flex-shrink-0 w-64 h-full pt-16 duration-75 border-r lg:flex transition-width ">
        <div className="h-full px-3 py-4 overflow-x-hidden overflow-y-auto rounded ">
          <div className="flex flex-col justify-between h-full py-2">
            <div>
              <ul className="pt-4 mt-4 space-y-2 border-t first:mt-0 first:border-t-0 first:pt-0 ">
                {menus.map((menu) => (
                  <li>
                    <Link
                      href={menu.href}
                      className={cn(
                        "flex items-center justify-center p-2 text-base font-normal text-gray-900  rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700",
                        currentUrl === menu.href && "bg-gray-100"
                      )}
                    >
                      {menu.icon}
                      <span className="flex-1 px-3 whitespace-nowrap">
                        {menu.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </aside>
    </div>
  )
}
