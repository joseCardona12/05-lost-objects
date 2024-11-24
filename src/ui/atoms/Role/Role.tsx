import "./roleStyles.scss";

interface IRole{
    role:string
}
export default function Role({role}:IRole):React.ReactNode{
    return (
        <div className="role">
            {role}
        </div>
    )
}