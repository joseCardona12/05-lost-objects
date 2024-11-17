import { Title } from "@/ui/atoms";
import { Card, InputSearch } from "@/ui/molecules";
import React from "react";
import "./sectionSearchStyles.scss";

export default function SectionSearch():React.ReactNode{
    return(
        <section className="section-search">
            <InputSearch />
            <div className="search-title">
                <Title  className="title-search font-size-2">Object Found</Title>
                <div className="title-cards">
                    <Card
                        url_image=""
                        lost_point="Acevedo"
                        title="Reloj"
                        date="13231"
                    />
                    <Card
                        url_image=""
                        lost_point="Acevedo"
                        title="Reloj"
                        date="13231"
                    />
                    <Card
                        url_image=""
                        lost_point="Acevedo"
                        title="Reloj"
                        date="13231"
                    />
                    <Card
                        url_image=""
                        lost_point="Acevedo"
                        title="Reloj"
                        date="13231"
                    />
                </div>
            </div>
        </section>
    )
}