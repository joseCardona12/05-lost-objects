import Link from "next/link"

interface IButtonPros{
    className?:string,
    children: React.ReactNode,
    href?:string,
}
export default function Button({
    className,
    children,
    href,
}:IButtonPros):React.ReactNode{
    return(
        <button className={`${className} button 
        border-radius-medium background-color-green 
        padding-medium display-flex-center color-text-black 
        font-main gap-small border-none
        `}>
            <Link className="text-decoration-none display-flex-center gap-small color-text-black"  href={href ? href : "/"}>{children}</Link>
        </button>
    )
}