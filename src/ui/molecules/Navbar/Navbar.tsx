import { INavbar } from "@/app/core/aplication/interfaces";
import ItemNav from "@/ui/atoms/ItemNav/ItemNav";
import "navbarStyles.scss";

interface INavbarProps{
    items: INavbar[]
}
export default function Navbar({
    items,
}:INavbarProps): React.ReactNode {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                {items.map((item:INavbar, index:number)=>(
                    <ItemNav
                        key={index}
                        url_item={item.url_item}
                        text={item.name}
                    />
                ))}
            </ul>
        </nav>
    )
}