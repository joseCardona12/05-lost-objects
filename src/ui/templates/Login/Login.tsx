import { FormLogin } from "@/ui/organisms"
import "./loginStyles.scss"

export default function Login():React.ReactNode{
    return (
        <main className="main-login">
            <section className="login">
                <div className="login-image">
                </div>
                <FormLogin />
            </section>
        </main>
    )
}