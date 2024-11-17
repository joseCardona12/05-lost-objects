
interface ITitleProps{
    children:React.ReactNode,
    className?:string
}
export default function Title({children, className}:ITitleProps):React.ReactNode{
    return (
        <div className={className}>
            <h1 style={{fontFamily:"var(--font-clash-display-medium)"}}>
                {children}
            </h1>
        </div>
    )
}