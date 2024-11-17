import Link from "next/link";
import "./itemNavStyles.scss"

interface IItemNavProps{
    url_item:string,
    text:string,
    icon:React.ReactElement
}
export default function ItemNav({
    url_item,
    text,
    icon
}:IItemNavProps):React.ReactNode{
    return (
        <li className="list-item display-flex-center hover-color-text-green">
            {icon}
            <Link className="item-link" href={url_item}>{text}</Link>
        </li>
    )
}