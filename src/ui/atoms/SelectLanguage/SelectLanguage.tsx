
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
    return (
        <div className="select-language">
            <span className="language-icon">{icon}</span>
            <p className="language-text">{text}</p>
            <span className="language-icon-final">{iconsFinal}</span>

            <div className="language-options">
                g
            </div>
        </div>
    )
}