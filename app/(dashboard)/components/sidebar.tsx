import Link from "next/link"
import { HiChartPie, HiCog6Tooth, HiFolder, HiUsers } from "react-icons/hi2"

export function SideBar() {
  return (
    <div className="lg:!block hidden">
      <aside className="fixed top-0 left-0 z-20 flex flex-col flex-shrink-0 w-64 h-full pt-16 duration-75 border-r lg:flex transition-width ">
        <div className="h-full px-3 py-4 overflow-x-hidden overflow-y-auto rounded ">
          <div className="flex flex-col justify-between h-full py-2">
            <div>
              <ul className="pt-4 mt-4 space-y-2 border-t first:mt-0 first:border-t-0 first:pt-0 ">
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center p-2 text-base font-normal text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    <HiChartPie className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                    <span className="flex-1 px-3 whitespace-nowrap">
                      Dashboard
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    <HiUsers className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                    <span className="flex-1 px-3 whitespace-nowrap">
                      Customers
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    <HiFolder className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                    <span className="flex-1 px-3 whitespace-nowrap">
                      Documents
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    <HiCog6Tooth className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                    <span className="flex-1 px-3 whitespace-nowrap">
                      Management
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </aside>
    </div>
  )
}
