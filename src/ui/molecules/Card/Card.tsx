import { IconArrowRight, IconStar } from "@/assets/icons";
import "./cardStyles.scss";

interface ICardProps{
    url_image?:string,
    title?:string,
    date?:string,
    lost_point?:string,
}
export default function Card({
    url_image,
    title = "Watch",
    date = "4/11/2024",
    lost_point = "Acevedo"
}:ICardProps):React.ReactNode{
    return (
        <div className="content-card">
            <div className="card-header">
                <div className="header-image">
                    <img src={url_image ? url_image : "/images/watch.png"} alt={`image - ${url_image}`} />
                </div>
                <div className="header-buttons">
                    <IconStar className="buttonStart button" />
                    <IconArrowRight className="buttonArrow button" />
                </div>
            </div>
            <div className="card-body">
                <div className="body-title">
                    <h5 className="title">{title}</h5>
                    <h6 className="title-date">{date}</h6>
                </div>
                <p className="body-paragraph">
                    Lost point: {lost_point}
                </p>
            </div>
        </div>
    )
}