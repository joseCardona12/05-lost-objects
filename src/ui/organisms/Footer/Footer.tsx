import { Button, Identify } from "@/ui/atoms";
import "./footerStyles.scss";
import Link from "next/link";

export default function Footer():React.ReactNode{
    return (
        <footer className="footer">
            <Identify
                text=""
                url_image="/images/logo-metro.png"
                url=""
            />
            <div className="footer-canals">
                <div className="canal-one">
                    <h5>Canal notificación judicial</h5>
                    <p>notificacionesjudiciales@metromedellin.gov.co</p>
                </div>
                <div className="canal-two">
                    <h5>Canal recepción PQRSDF</h5>
                    <p>contactenos@metromedellin.gov.co</p>
                </div>
            </div>
            <div className="footer-schedules">
                <div className="canal-two">
                    <h5>Horario Sede Administrativa</h5>
                    <p>Lunes a Viernes de 7:30 a.m. a 5:30 p.m.</p>
                </div>
                <p>
                    Calle 44 46-001, Bello-Antioquia-Colombia-Suramérica.
                    A.A. 9128 Medellín
                </p>
            </div>
            <div className="footer-contact">
                <Button className="button button_footer">
                    <Link href={"https://www.metrodemedellin.gov.co/"}>
                        Atención al usuario
                    </Link>
                </Button>
                <p className="contact">Contacto ético (Línea anticorrupción)</p>
            </div>
        </footer>
    )
}