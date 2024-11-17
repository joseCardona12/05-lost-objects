import { LostObject, RecoveryProcess } from "@/ui/molecules";
import { Objects, SectionHome, SectionSearch } from "@/ui/organisms";
import "./homeStyles.scss";

export default function Home():React.ReactNode{
    return (
        <main className="home">
            <SectionHome />
            <Objects />
            <LostObject />
            <SectionSearch />   
            <RecoveryProcess />
        </main>
    )
}