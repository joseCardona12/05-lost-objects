import { INavbar } from "@/app/core/aplication/interfaces";
import { ItemNav, SelectLanguage } from "@/ui/atoms";
import "./navbarStyles.scss";
import { IconArrowDown, IconLanguage } from "@/assets/icons";

interface INavbarProps {
  openMenu: boolean;
  items: INavbar[];
}
export default function Navbar({
  openMenu,
  items,
}: INavbarProps): React.ReactNode {
  return (
    <>
      {openMenu && (
        <nav className="navbar display-flex-center gap-medium">
          <ul className="navbar-list display-flex">
            {items.map((item: INavbar, index: number) => (
              <ItemNav
                key={index}
                url_item={item.url_item}
                text={item.name}
                icon={item.icon || <></>}
              />
            ))}
          </ul>
          <SelectLanguage
            icon={<IconLanguage />}
            text="Spanish"
            iconsFinal={<IconArrowDown />}
          />
        </nav>
      )}
    </>
  );
}
