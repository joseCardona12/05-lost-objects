import { Title } from "@/ui/atoms";
import "./lostObjectStyles.scss";
import { IconArrowRightShort } from "@/assets/icons";
export default function LostObject():React.ReactNode{
    return (
        <div className="content-lostObjects">
            <div className="object-left">
                <Title>
                    Lost Objects in the Medellín Metro
                </Title>
                <hr />
                <p className="objects-paragraph">
                    Medellin's metro system, renowned for its efficiency 
                    and coverage, is also a place where things get lost frequently. 
                    Thousands of passengers use this means of transport 
                    every day, which increases the likelihood of forgetting 
                    belongings in the carriages or stations.
                </p>
            </div>
            <div className="object-right">
                <Title>
                    Common Types of Lost Items
                </Title>
                <ul className="right-list">
                    <li className="list-item">
                        <IconArrowRightShort />
                        Cellphones.
                    </li>
                    <li className="list-item">
                        <IconArrowRightShort />
                        Bags.
                    </li>
                    <li className="list-item">
                        <IconArrowRightShort />
                        Documents.
                    </li>
                    <li className="list-item">
                        <IconArrowRightShort />
                        Personal information.
                    </li>
                </ul>
            </div>
        </div>
    )
}