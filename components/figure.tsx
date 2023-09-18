"use client"

interface FigureProps{
    title: string
    description: string
}

export const Figure = ({description, title}: FigureProps) => {
    return(
        <div>
            <h2 className="text-[40px] font-bold leading-normal">
                {title}
            </h2>
            <p className="text-[16px] leading-[22px] font-normal">
                {description}
            </p>
        </div>
    )
}