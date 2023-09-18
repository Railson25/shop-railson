"use client"
import { SearchIcon } from "./icons/search-icon"

export const Input = () => {
    return(
        <div className="w-full flex items-center gap-3 bg-[--grey] rounded-[62px] fill-neutral-500 px-4 py-3 max-md:hidden">
            <SearchIcon />
            <input 
                className="rounded-[62px] bg-inherit outline-none font-normal text-[16px] max-lg:text-[14px] "
                placeholder="Search for products..."
            />
        </div>
    )
}