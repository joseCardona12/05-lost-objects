import { Title } from "@/ui/atoms";
import "./recoveryProcessStyles.scss"


export default function RecoveryProcess():React.ReactNode{
    return(
        <div className="recovery-process">
            <Title className="font-size-2 title">Recovery Process</Title>
            <div className="process-image">
                <img src="/images/recovery-process.png" alt="image-recovery" />
            </div>
        </div>
    )
}