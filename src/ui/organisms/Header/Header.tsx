import { IconArrowDown, IconArrowRight, IconLanguage } from "@/assets/icons";
import Button from "@/ui/atoms/Button/Button";
import Identify from "@/ui/atoms/Identify/Identify";
import SelectLanguage from "@/ui/atoms/SelectLanguage/SelectLanguage";
import Navbar from "@/ui/molecules/Navbar/Navbar";
import "./headerStyles.scss";

export default function Header():React.ReactNode{
    return (
        <header className="header">
            <Identify
                url_image=""
                url="/"
                text="Metro de medellín"
            />
            <Navbar
                items={[
                    {name:"Home", url_item:"/"},
                    {name:"Lost-objects", url_item:"/lost"},
                    {name: "Contact", url_item:"/contact"},     
                ]}
            />
            <SelectLanguage
                icon={<IconLanguage />}
                text="Spanish"
                iconsFinal={<IconArrowDown />}
            />
            <Button className="">
                Explore now
                <span>
                    <IconArrowRight />
                </span>
            </Button>
        </header>
    )
}