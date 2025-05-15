import { Link } from "react-router-dom";
import "./Home.css";
import Slider from "../../components/Slider/Slider";
import heart from "../../assets/images/heart.png";
import localisation from "../../assets/images/localisation.png";
import match from "../../assets/images/match.png";

function Home() {
	return (
		<section className="home-container">
			<div className="top-bar">
				<div className="intro">
					<h1 className="title">
						Trouve le perfect match …<br />
						parce que même les truffes ont droit à l’amour !
					</h1>
					<p className="subtitle">
						Un site de rencontre exclusivement réservé aux chiens
					</p>

					<Link to="/profiles">
						<button type="button" className="discover-button">
							Découvrir les profils
						</button>
					</Link>
					<article className="features">
						<div className="feature">
							<div className="icon">
								<img
									src={match}
									alt="Match"
									className="icon-image"
								/>
							</div>
							<div className="text">
								<p>Trouve des amis proches …</p>
							</div>
						</div>
						<div className="feature">
							<div className="icon">
								<img
									src={heart}
									alt="Heart"
									className="icon-image"
								/>
							</div>
							<div className="text">
								<p>Match selon tes préférences</p>
							</div>
						</div>
						<div className="feature">
							<div className="icon">
								<img
									src={localisation}
									alt="Paw"
									className="icon-image"
								/>
							</div>
							<p>Localisation</p>
						</div>
					</article>
				</div>

				<aside className="dog-profile">
					<p className="woof">Complètement Woof !</p>
					<div className="dog-card">
						<Slider />
					</div>
				</aside>
			</div>

			<p className="badge-info">
				Dis leur ce que tu attends grâce aux badges ! Ce badge apparaîtra sur
				ton profil et permettra aux autres d’identifier rapidement ce que tu
				recherches
			</p>

			<article className="badges">
				<ul className="badge-list">
					<li>😺 Un partenaire pour faire du sport</li>
					<li>🍣 Un dîner pour briser la glace</li>
					<li>💍 Un engagement sur le long terme</li>
					<li>🌭 Une relation sans lendemain</li>
					<li>🧘‍♀️ Des sorties pour penser et prendre soin de soi</li>
				</ul>
			</article>
		</section>
	);
}

export default Home;
