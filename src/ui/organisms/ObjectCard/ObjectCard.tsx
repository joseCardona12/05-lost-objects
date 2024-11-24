import { Card } from "@/ui/molecules"
import "./objectCardStyles.scss";

interface IObjectCardProps{
    title:string,
    objects: []
}
export default function ObjectCard({
    title,
    objects
}:IObjectCardProps):React.ReactNode{
    return (
        <div className="content-objects1">
            <h5 className="font-size-2">{title}</h5>
            <div className="objects">
                <Card
                title="Reloj"
                url_image=""
                date="2024-2-2"
                lost_point="Acevedo"
                />
                <Card
                title="Reloj"
                url_image=""
                date="2024-2-2"
                lost_point="Acevedo"
                />
                <Card
                title="Reloj"
                url_image=""
                date="2024-2-2"
                lost_point="Acevedo"
                />
                <Card
                title="Reloj"
                url_image=""
                date="2024-2-2"
                lost_point="Acevedo"
                />
                <Card
                title="Reloj"
                url_image=""
                date="2024-2-2"
                lost_point="Acevedo"
                />
                <Card
                title="Reloj"
                url_image=""
                date="2024-2-2"
                lost_point="Acevedo"
                />
                <Card
                title="Reloj"
                url_image=""
                date="2024-2-2"
                lost_point="Acevedo"
                />
                <Card
                title="Reloj"
                url_image=""
                date="2024-2-2"
                lost_point="Acevedo"
                />
            </div>
        </div>
    )
}