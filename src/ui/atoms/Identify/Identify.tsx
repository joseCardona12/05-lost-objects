import "./identifyStyles.scss";
import Link from "next/link";
interface IIdentifyProps {
    url_image?: string,
    text?:string,
    url:string,
}
export default function Identify({
    url_image,
    text,
    url
}:IIdentifyProps):React.ReactNode {
    return (
        <div className="identify display-flex-center">
            {
                url_image
                ?
                <Link href={url}>
                    <img src={url_image} alt={`IMAGE-${url_image}`} />
                </Link>
                :
                <Link href={url}>
                    <p>{text}</p>
                </Link>
            }
        </div>
    )
}