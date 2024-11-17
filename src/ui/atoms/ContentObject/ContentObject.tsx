import "./contentObjectStyles.scss";
interface IContentObjectProps{
    title:string,
    url_image: string,
    background_color?:string,
    className?:string,
    color?:string,
}
export default function ContentObject({
    title,
    url_image,
    background_color,
    className,
    color
}:IContentObjectProps):React.ReactNode{
    return (
        <div className={`object border-radius-medium padding-large ${className}`} style={{background: background_color, color: color} }>
            <h3 className="font-size-3">{title}</h3>
            <div className="image display-flex-center">
                <img className="" src={url_image} alt={`image - ${url_image}`} />
            </div>
        </div>
    )
}