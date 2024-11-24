import React from "react";
import "./dashboardStyles.scss";
import { TitleView } from "@/ui/atoms";
import { Category } from "@/ui/molecules";
import { ObjectCard } from "@/ui/organisms";

export default function Dashboard(): React.ReactNode {
    return (
        <main className="dashboard">
            <TitleView
                title="Lost objects"
            />
            <div className="dashboard-objects">
                <Category />
                <ObjectCard
                    title="Documents"
                    objects={[]}
                />
            </div>
        </main>
    )
}