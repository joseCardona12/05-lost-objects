import "./formButtonStyles.scss";
interface IFormButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    className?:string,
    children: React.ReactNode
}
export default function FormButton({
    className,
    children,
    ...props
}:IFormButtonProps):React.ReactNode{
    return (
        <button className={className} {...props}>
            {children}
        </button>
    )
}