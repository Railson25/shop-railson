"use client"

import { CloseIcon } from "./icons/close-icon"

export const Advertising = () => {

    return(
        <div className="flex py-2">
            <div className="w-full flex justify-start sm:justify-center">
                <p className=" font-normal text-[14px] max-sm:text-[10px] max-md:text-[12px]">
                    Sign up and get 20% off to your first order.
                    <span className="pl-2 font-medium hover:underline">Sign Up Now</span>
                </p>
            </div>
            <div className=" max-sm:hidden fill-white">

                <button>
                    <CloseIcon />
                </button>
            </div>
        </div>
    )
}