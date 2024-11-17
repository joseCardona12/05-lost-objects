import { Title } from "@/ui/atoms";
import "./recoveryProcessStyles.scss"


export default function RecoveryProcess():React.ReactNode{
    return(
        <div className="recovery-process">
            <Title className="font-size-2 title">Recovery Process</Title>
            <picture className="process-image">
                <source media="(max-width: 900px)" srcSet="/images/recovery-process-responsive.png" />
                <img src="/images/recovery-process.png" alt="image-recovery" />
            </picture>
        </div>
    )
}