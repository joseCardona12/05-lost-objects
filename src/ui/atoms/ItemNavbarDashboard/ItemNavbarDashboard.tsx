import Link from "next/link";
import "./itemNavbarDashboardStyles.scss";

interface IItemSidebarProps {
    url_item: string,
    label_item: string,
    icon_item?: React.ReactElement,
    background_color?:string,
    color?:string,
    className?:string,
}
export default function ItemNavbarDashboard({
    url_item,
    label_item,
    icon_item,
    background_color,
    color,
    className
}:IItemSidebarProps):React.ReactNode{
    return (
        <li className={`item-sidebar ${className}`}>
            <Link style={{color:color}} className="sidebar-link" href={url_item}>
            {icon_item}
            {label_item}
            </Link>
        </li>
    )
}