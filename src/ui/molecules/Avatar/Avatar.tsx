import { Role } from "@/ui/atoms"
import "./avatarStyles.scss";

interface IAvatarProps{
    name:string,
    role:string
}
export default function Avatar({
    name,
    role
}:IAvatarProps):React.ReactNode{
    return (
        <div className="content-avatar">
            <div className="avatar-image">
                R
            </div>
            <div className="avatar-information">
                <h5 className="information-name">
                    {name}
                </h5>
                <Role role={role} />
            </div>
        </div>
    )
}