
"use client";
import { Avatar } from "@/ui/molecules";
import "./sidebarStyles.scss";
import NavbarDashboard from "@/ui/molecules/NavbarDashboard/NavbarDashboard";
import { ItemNavbarDashboard } from "@/ui/atoms";
import { IconLogOut } from "@/assets/icons";
import { useAuthLoggedState } from "@/app/core/application/global-state";
export default function Sidebar():React.ReactNode{
    const {auth} = useAuthLoggedState((state)=>state);
    console.log("auth",auth)
    return (
        <div className="sidebar">
            <Avatar 
                name={auth.user.name || "JOSE"}
                role={auth.user.role_id === 1 ? "Admin": "User"}
            />
            <NavbarDashboard />
            <ItemNavbarDashboard
             url_item="/"
             label_item="Log Out"
             icon_item={<IconLogOut />}
             className="itemLog"
            />
        </div>
    )
}