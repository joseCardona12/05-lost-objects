"use client";
import { useState } from "react";
import "./selectLanguageStyles.scss";
interface ISelectLanguageProps{
    icon?: React.ReactNode,
    text:string,
    iconsFinal?: React.ReactNode
}
export default function SelectLanguage({
    icon,
    text,
    iconsFinal,
}:ISelectLanguageProps):React.ReactNode{
    const [openOptions, setOpenOptions] = useState<boolean>(false);

    const handleOpenOptions = ():void =>{
        setOpenOptions(!openOptions);
    }
    return (
        <div className="select-language display-flex padding-medium cursor-pointer" onClick={handleOpenOptions}>
            <span className="language-icon">{icon}</span>
            <p className="language-text">{text}</p>
            <span className="language-icon-final cursor-pointer">{iconsFinal}</span>

            {openOptions && (
                <div className="language-options width-pc-100 border-radius-medium padding-medium background-color-white">
                    <p className="hover-color-text-green">Spanish</p>
                    <p className="hover-color-text-green">English</p>
                </div>
            )}
        </div>
    )
}