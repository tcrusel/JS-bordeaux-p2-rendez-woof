import "./Header.css";
import { Link } from "react-router";
import logoSite from "../../assets/images/logo_site.png";

function Header() {
	return (
		<header>
			<div className="title">
				<img
					className="logoSite"
					src={logoSite}
					alt="logo"
					width="50"
					height="50"
				/>
				<h1>RENDEZ-WOOF</h1>
			</div>
			<nav>
				<Link to="/">Accueil</Link>
				<Link to="/myProfile">Mon profil</Link>
				<Link to="/profiles">Découvrir des profils</Link>
			</nav>
		</header>
	);
}

export default Header;
