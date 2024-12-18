"use client";
import { ContentObject, inputAlert } from "@/ui/atoms";
import "./objectStyles.scss"
export default function Objects():React.ReactNode{

    const handleClick = ():void =>{
        inputAlert("Error. Is required to login. Onclick - Explore now - ", "error");
    }
    return(
        <div className="content-objects width-pc-100 gap-large">
            <ContentObject
                title="Shoes"
                url_image="/images/shoes.png"
                background_color="var(--background-color-black)"
                className="object-1"
                color="var(--color-text-green-yellow)"
                onClick={handleClick}
            />
            <ContentObject
                title="Cellphones"
                url_image="/images/cellphone02.png"
                background_color="var(--background-color-black)"
                className="object-2"
                color="var(--color-text-green-yellow)"
                onClick={handleClick}
            />
            <ContentObject
                title="Bags"
                url_image="/images/bolso.png"
                background_color="var(--background-color-green-yellow)"
                className="object-3"
                color="var(--color-text-black)"
                onClick={handleClick}
            />
            <ContentObject
                title="Caps"
                url_image="/images/caps.png"
                background_color="var(--background-color-green-yellow)"
                className="object-4"
                color="var(--color-text-black)"
                onClick={handleClick}
            />
            <ContentObject
                title="Identity Card"
                url_image="/images/identity.png"
                background_color="var(--background-color-black)"
                className="object-5"
                color="var(--color-text-green-yellow)"
                onClick={handleClick}
            />
            <ContentObject
                title="Keys"
                url_image="/images/keys.png"
                background_color="var(--background-color-black)"
                className="object-6"
                color="var(--color-text-green-yellow)"
                onClick={handleClick}
            />
        </div>
    )
}