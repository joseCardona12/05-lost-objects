import { LostObject } from "@/ui/molecules";
import { Objects, SectionHome } from "@/ui/organisms";

export default function Home():React.ReactNode{
    return (
        <main className="home">
            <SectionHome />
            <Objects />
            <LostObject />
        </main>
    )
}