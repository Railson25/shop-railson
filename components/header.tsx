"use client"

import Image from "next/image"
import { Button } from "./button"
import { Figure } from "./figure"
import { VersaceIcon } from "./icons/versace"
import { ZaraIcon } from "./icons/zara-icon"
import { GucciIcon } from "./icons/gucci-icon"
import { PradaIcon } from "./icons/prada-icon"
import { CalvinKlenIcon } from "./icons/calvinKlen-icon"
import Link from "next/link"

export const Header = () => {
    return (
        <div className="w-full flex flex-col ">
            <div className="flex items-start py-28 gap-x-14 ">
                <div className="max-md:hidden">
                    <h1 className="max-w-[577px] lg:max-w-[700px] uppercase font-bold text-[64px] leading-[64px]">
                        FIND CLOTHES THAT MATCHES YOUR STYLE
                    </h1>
                    <p className="max-w-[545px]  font-normal leading-[22px] text-[16px] my-8">
                        Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style. 
                    </p>

                    <Button 
                        label="Shop Now"
                    />

                    <div className="flex gap-x-8 mt-12">
                        <Figure 
                            title="200 +"
                            description="International Brands"
                        />
                        <hr className="border h-[74px] bg-neutral-100/50"/>
                        <Figure 
                            title="2,000 +"
                            description="High-Quality Products"
                        />
                        <hr className="border h-[74px] bg-neutral-100/50"/>
                        <Figure 
                            title="30,000+"
                            description="Happy Customers"
                        />
                    </div>
                </div>
                
                {/* image */}
                   
            </div>
            <div className="w- xl:w-full bg-blue-600 py-11 flex justify-between gap-x-3">
                <Link href="/"
                    
                >
                    <VersaceIcon />
                </Link>

                <Link href="/"
                    
                >
                    <ZaraIcon />
                </Link>

                <Link href="/"
                    
                >
                    <GucciIcon />   
                </Link>

                <Link href="/"
                   
                >
                    <PradaIcon />
                </Link>

                <Link 
                    href="/"
                >
                    <CalvinKlenIcon />
                </Link>
            </div>
        </div>
    )
}