"uxe client"

import {twMerge} from 'tailwind-merge'

interface ButtonProps {
    label: string
    className?: string
}

export const Button = ({className, label}: ButtonProps) => {
    return(
        <button
            className={twMerge("w-210px py-4 px-[54px] flex justify-center items-center text-[16px] leading-normal font-medium bg-blue-500 rounded-[62px]", className)}
        >
            {label}
        </button>
    )
}