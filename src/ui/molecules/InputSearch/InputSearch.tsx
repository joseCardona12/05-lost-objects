"use client";
import { IconSearch } from "@/assets/icons";
import { Input } from "@/ui/atoms";
import "./inputSearchStyles.scss";

export default function InputSearch():React.ReactNode{
    return (
        <div className="content-inputsearch display-flex-column gap-medium">
            <div className="inputsearch">
                <Input
                    name=""
                    onChange={()=>console.log("")}
                    type=""
                    value=""
                    placeholder="Search..."
                />
                <IconSearch />
                <ul className="content-options">
                    <li>Reloj</li>
                    <li>Reloj</li>
                    <li>Reloj</li>
                </ul>
            </div>
             
        </div>
    )
}