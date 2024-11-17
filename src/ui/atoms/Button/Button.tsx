
interface IButtonPros{
    className?:string,
    children: React.ReactNode
}
export default function Button({
    className,
    children
}:IButtonPros):React.ReactNode{
    return(
        <button className={`${className} button`}>
            {children}
        </button>
    )
}