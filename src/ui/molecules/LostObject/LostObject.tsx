import { Title } from "@/ui/atoms";
import "./lostObjectStyles.scss";
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
        </div>
    )
}