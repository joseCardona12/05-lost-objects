import {FormRegister } from "@/ui/organisms"
import "./RegisterStyles.scss"

export default function Register():React.ReactNode{
    return (
        <main className="main-register">
            <section className="register">
                <div className="register-image">
                </div>
                <FormRegister />
            </section>
        </main>
    )
}