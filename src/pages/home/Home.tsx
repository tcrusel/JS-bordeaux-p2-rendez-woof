import Profiles from "../profiles/Profiles";
import "./Home.css";

function Home() {
	return (
		<div className="home-container">
			<div className="top-bar">
				<div className="intro">
					<h1 className="title">
						Trouve le perfect match …<br />
						parce que même les truffes ont droit à l’amour !
					</h1>
					<p className="subtitle">
						Un site de rencontre exclusivement réservé aux chiens
					</p>
				</div>

				<aside className="dog-profile">
					<p className="woof">Complètement Woof !</p>
					<div className="dog-card">
						<img
							src="https://lemagduchien.ouest-france.fr/images/dossiers/2019-03/akita-083228.jpg"
							alt="Tayuki le chien"
							className="dog-image"
						/>
						<p className="dog-name">Tayuki 🦴</p>
					</div>
				</aside>
			</div>

			<button type="button" className="discover-button">
				Découvrir les profils
			</button>

			<section className="features">
				<div className="feature">
					<div className="icon">🐾</div>
					<p>Trouve des amis proches …</p>
				</div>
				<div className="feature">
					<div className="icon">❤️</div>
					<p>Match selon tes préférences</p>
				</div>
				<div className="feature">
					<div className="icon">📍</div>
					<p>Localisation</p>
				</div>
			</section>

			<section className="badges">
				<p>
					Dis leur ce que tu attends grâce aux badges ! Ce badge apparaîtra sur
					ton profil et permettra aux autres d’identifier rapidement ce que tu
					recherches
				</p>
				<ul className="badge-list">
					<li>😺 Un partenaire pour faire du sport</li>
					<li>🍣 Un dîner pour briser la glace</li>
					<li>💍 Un engagement sur le long terme</li>
					<li>🌭 Une relation sans lendemain</li>
					<li>🧘‍♀️ Des sorties pour penser et prendre soin de soi</li>
				</ul>
			</section>
		</div>
	);
}

export default Home;
