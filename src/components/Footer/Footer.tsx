import "./Footer.css";
import logoFb from "../../assets/images/logo_fb.png";
import logoInsta from "../../assets/images/logo_insta.png";
import logoTiktok from "../../assets/images/logo_tiktok.png";
import logoX from "../../assets/images/logo_x.png";

function Footer() {
    return (
        <footer>
            <div className="about">
                <p className="bold">À propos</p>
                <p>Qui sommes-nous ?</p>
                <p>Notre mission</p>
                <p>Témoignage</p>
            </div>
            <div className="followUs">
                <p className="bold">Suivez-nous</p>
                <div className="logosFooter">
                    <img className="logosSize" src={logoInsta} alt="logo instagram" width="20" height="20" />
                    <img className="logosSize" src={logoTiktok} alt="logo tiktok" width="20" height="20" />
                    <img className="logosSize" src={logoFb} alt="logo facebook" width="20" height="20" />
                    <img className="logosSize" src={logoX} alt="logo X" width="23" height="20" />
                </div>
            </div>
            <p id="mentionsFooter">
                © 2025 Rendez-Woof | Mentions légales | CGU | Politique de confidentialité
            </p>
        </footer>
    );
}

export default Footer;