import { IconArrowRight } from "@/assets/icons";
import { ItemNavbarDashboard, TitleView } from "@/ui/atoms";
import "./categoryStyles.scss";

export default function Category(): React.ReactNode {
    return (
        <div className="content-categories">
            <h4 className="categories-title">
                Category
                <IconArrowRight />
            </h4>
            <div className="list">
                    <ItemNavbarDashboard
                        url_item="/"
                        label_item="Documents"
                    />

                    <ItemNavbarDashboard
                        url_item="/"
                        label_item="Caps"
                    />
                    <ItemNavbarDashboard
                        url_item="/"
                        label_item="Watches"
                    />
                    <ItemNavbarDashboard
                        url_item="/"
                        label_item="Bags"
                    />

                    <ItemNavbarDashboard
                        url_item="/"
                        label_item="Cellphone"
                    />
            </div>
        </div>
    )
}