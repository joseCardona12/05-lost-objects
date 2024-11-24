

interface ITitleViewProps{
    title:string,
}
export default function TitleView({
    title
}:ITitleViewProps):React.ReactNode{
    return (
        <div className="content-title size-4">
            <h1 className="title">{title}</h1>
        </div>
    )
}