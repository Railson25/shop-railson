"use client"

import Link from "next/link"
import { Advertising } from "./advertising"
import { Input } from "./Input"
import { CarIcon } from "./icons/car-icon"
import { PersonIcon } from "./icons/person-icon"
import { ArrowDown } from "./icons/arrow-down"
import { SearchIcon } from "./icons/search-icon"


export const Navbar = () => {

    return(
        <div className="w-ful px-24 py-2 flex flex-col max-sm:px-10 justify-start ">
            <Advertising />
            <div className="flex items-center justify-between py-6">
                <h1 className="uppercase font-bold text-[32px] max-lg:text-[26px]">
                    SHOP.CO
                </h1>
                <nav className="
                flex gap-x-6 px-10 max-lg:text-[12px] max-md:hidden text-[16px] font-normal max-lg:gap-x-4">
                    <Link href='/' className="flex items-center gap-x-1 fill-white">
                        Shop
                        <ArrowDown />
                    </Link>
                    <Link href='/'>
                        Shop
                    </Link>
                    <Link href='/'>
                        Shop
                    </Link>
                    <Link href='/'>
                        Shop
                    </Link>
                </nav>

                <Input />

                <div className="flex pl-10 max-lg:pl-4 gap-x-3 fill-white">
                    <div className="md:hidden w-6 h-6">
                        <SearchIcon />
                    </div>
                    <CarIcon  />
                    <PersonIcon />
                </div>

            </div>
        </div>
    )
}