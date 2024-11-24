import { ItemNavbarDashboard } from "@/ui/atoms";
import "./navbarDashboardStyles.scss";
import { IconDashboard, IconForums, IconHelp, IconObjects, IconSend, IconSettings, IconTestimonies } from "@/assets/icons";

export default function NavbarDashboard():React.ReactNode{

    return (
        <nav className="navbarDashboard">
            <ul className="navbar-list">
                <ItemNavbarDashboard
                    url_item="/"
                    label_item="Dashboard"
                    icon_item={<IconDashboard />}   
                />

                <ItemNavbarDashboard
                    url_item="/"
                    label_item="Lost Objects"
                    icon_item={<IconObjects />} 
                />

                <ItemNavbarDashboard
                    url_item="/"
                    label_item="Forums"
                    icon_item={<IconForums />} 
                />

                <ItemNavbarDashboard
                    url_item="/"
                    label_item="Help and support"
                    icon_item={<IconHelp />} 
                />

                <ItemNavbarDashboard
                    url_item="/"
                    label_item="New posts"
                    icon_item={<IconSend />} 
                    background_color="var(--background-color-white)"
                />

                <ItemNavbarDashboard
                    url_item="/"
                    label_item="Testimonies"
                    icon_item={<IconTestimonies />} 
                    background_color="var(--background-color-white)"
                />

                <ItemNavbarDashboard
                    url_item="/"
                    label_item="Settings"
                    icon_item={<IconSettings />} 
                    background_color="var(--background-color-white)"
                /> 
            </ul>
        </nav>
    )
}