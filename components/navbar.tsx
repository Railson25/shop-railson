import Link from "next/link"
import { Advertising } from "./advertising"
import { CloseIcon } from "./icons/close-icon"

export const Navbar = () => {
    return(
        <div className="w-ful px-24 py-2 flex flex-col max-sm:px-10 bg-blue-400 justify-start ">
            <Advertising />
            <div className="flex items-center justify-between">
                <h1 className="uppercase font-bold text-[32px]">
                    SHOP.CO
                </h1>
                <nav className="flex px-10 max-md:hidden">
                    <Link href='/' className="flex text-[16px] font-normal">
                        Shop
                        <CloseIcon />
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

                <input className="max-md:hidden"/>

                <div className="flex pl-10 ">
                    <CloseIcon />
                    <CloseIcon />
                </div>

            </div>
        </div>
    )
}