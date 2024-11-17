"use client";
import {IconArrowRight, IconLanguage, IconMenu } from "@/assets/icons";
import {Identify, Button} from "@/ui/atoms";
import { Navbar } from "@/ui/molecules";
import "./headerStyles.scss";

export default function Header():React.ReactNode{
    const widthView = window.innerWidth;
    console.log(widthView);
    return (
        <header className="header display-flex-space-between">
            <Identify
                url_image="/images/logo-metro.png"
                url="/"
                text=""
            />
            <Navbar
                openMenu={true}
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
            <div className="header-sandwitch">
                <IconMenu className="sandwitch-icon" />
            </div>
        </header>
    )
}