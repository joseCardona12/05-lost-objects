import Link from "next/link";
import "./itemNavStyles.scss"

interface IItemNavProps{
    url_item:string,
    text:string,
}
export default function ItemNav({
    url_item,
    text
}:IItemNavProps):React.ReactNode{
    return (
        <li className="list-item display-flex-center">
            <Link href={url_item}>{text}</Link>
        </li>
    )
}