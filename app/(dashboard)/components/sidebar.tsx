import Link from "next/link"

export function SideBar() {
  return (
    <div className="lg:!block hidden">
      <aside className="fixed top-0 left-0 z-20 flex flex-col flex-shrink-0 w-64 h-full pt-16 duration-75 border-r lg:flex transition-width ">
        <div className="h-full px-3 py-4 overflow-x-hidden overflow-y-auto rounded ">
          <div className="flex flex-col justify-between h-full py-2">
            <div>
              <ul className="pt-4 mt-4 space-y-2 border-t first:mt-0 first:border-t-0 first:pt-0 ">
                <li></li>
              </ul>
            </div>
          </div>
        </div>
      </aside>
    </div>
  )
}
