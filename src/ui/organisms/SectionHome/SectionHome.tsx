import { IconArrowRight } from "@/assets/icons";
import { Title } from "@/ui/atoms";
import "./sectionHomeStyles.scss";

export default function SectionHome():React.ReactNode{
    return (
        <div className="section-home background-color-greenyellow width-pc-100 
        padding-extra-extra-large display-flex-space-between
        border-radius-medium
        ">

            <div className="width-pc-30">
                <Title className="display-flex font-size-3">
                    <span className="">Lost </span>
                    <span className="background-color-green display-flex-center">
                        Objects 
                        <IconArrowRight />
                    </span>
                </Title>
                <p className="width-pc-70 paragraph">Lost something in the Medellín metro? 
                    Don't panic! You can get it back in an instant. 
                    Connect and make it happen!
                </p>
            </div>
            <div className="width-pc-50 image-home display-flex-center">
                <img className="" src="/images/womans.png" alt="image womans" />
            </div>
        </div>
    )
}