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
                <Link href={url} className="text-decoration-none">
                    <img src={url_image} alt={`IMAGE-${url_image}`} />
                </Link>
                :
                <Link href={url} className="text-decoration-none color-text-black">
                    <p>{text}</p>
                </Link>
            }
        </div>
    )
}