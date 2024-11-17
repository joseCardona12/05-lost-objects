import {IconArrowRight, IconLanguage } from "@/assets/icons";
import {Identify, Button} from "@/ui/atoms";
import { Navbar } from "@/ui/molecules";
import "./headerStyles.scss";

export default function Header():React.ReactNode{
    return (
        <header className="header display-flex-space-between">
            <Identify
                url_image="/images/logo-metro.png"
                url="/"
                text=""
            />
            <Navbar
                items={[
                    {name:"Home", url_item:"/", icon: <IconLanguage />},
                    {name:"Lost-objects", url_item:"/lost", icon: <IconLanguage />},
                    {name: "Contact", url_item:"/contact", icon: <IconLanguage />},     
                ]}
            />
            <Button className="cursor-pointer">
                Explore now
                <span>
                    <IconArrowRight />
                </span>
            </Button>
        </header>
    )
}