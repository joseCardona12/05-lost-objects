
interface IButtonPros{
    className?:string,
    children: React.ReactNode
}
export default function Button({
    className,
    children
}:IButtonPros):React.ReactNode{
    return(
        <button className={`${className} button 
        border-radius-medium background-color-green 
        padding-medium display-flex-center color-text-black 
        font-main gap-small border-none`}>
            {children}
        </button>
    )
}