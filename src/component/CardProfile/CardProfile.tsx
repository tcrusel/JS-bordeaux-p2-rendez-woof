import { useCallback, useState } from "react";
import "./CardProfile.css";
import { useEffect } from "react";
import ReactCardFlip from "react-card-flip";
import { toast } from "sonner";
import { type DogType, useLikes } from "../LikeContext/LikesContext";

interface CardProfile {
	dog: DogType;
}

function CardProfile() {
	const [isFlipped, setIsFlipped] = useState(false);
	const { setLikedDogs } = useLikes();

	const [dog, setDog] = useState<DogType | null>(null);

	const handleNextProfile = useCallback(async () => {
		const dogId = Math.floor(Math.random() * 20) + 1;

		const res = await fetch(
			`https://my-json-server.typicode.com/wildcodeschool-2025-03/JS-bordeaux-p2-api-rendez-woof/dogs/${dogId}`,
		);
		const randomDog = await res.json();
		setDog(randomDog);
	}, []);

	useEffect(() => {
		handleNextProfile();
	}, [handleNextProfile]);

	const handleLike = (dog: DogType) => {
		setLikedDogs((prev) => [...prev, dog]);
		setIsFlipped(false);
		setTimeout(() => {
			handleNextProfile();
		}, 300);
	};

	const handleDislike = () => {
		setIsFlipped(false);
		setTimeout(() => {
			handleNextProfile();
		}, 300);
	};

	if (!dog) return;

	return (
		<>
			<ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
				<article
					className="cardProfile"
					onClick={() => setIsFlipped(!isFlipped)}
					onKeyUp={() => setIsFlipped(!isFlipped)}
				>
					<div className="cardTop">
						<div className="infoDog">
							<p className="bold">
								{dog.name}, {dog.age} an{dog.age > 1 ? "s" : ""}
							</p>
							<p className="raceCityDog">
								{dog.race}, {dog.city}
							</p>
						</div>
						<img
							src="src/assets/images/icone_flipCard.png"
							className="iconFlipCard"
							alt="logo-flip"
						/>
					</div>
					<img className="photosDogs" src={dog.photo} alt={dog.name} />
					<div className="likeDislikeButtons">
						<button
							type="button"
							onClick={(e) => {
								e.stopPropagation();
								handleDislike();
								toast.success(`Tu as dislike ${dog.name} !`);
							}}
							aria-label="Refuser ce chien"
						>
							<img
								src="src/assets/images/dislike_button.png"
								alt="logo croix"
							/>
						</button>
						<img
							src="src/assets/images/separation_like_dislike.png"
							alt="séparation entre le bouton like et le bouton dislike"
						/>

						<button
							type="button"
							onClick={(e) => {
								e.stopPropagation();
								handleLike(dog);
								toast.success(`Tu as liké ${dog.name} !`);
							}}
						>
							<img src="src/assets/images/like_button.png" alt="logo coeur" />
						</button>
					</div>
				</article>
				<article
					className="cardProfileback"
					onClick={() => setIsFlipped(!isFlipped)}
					onKeyUp={() => setIsFlipped(!isFlipped)}
				>
					<div className="cardTop">
						<div className="infoDog">
							<p className="bold">
								{dog.name}, {dog.age} an{dog.age > 1 ? "s" : ""}
							</p>
							<p className="raceCityDog">
								{dog.race}, {dog.city}
							</p>
						</div>
						<img
							src="src/assets/images/icone_flipCard.png"
							className="iconFlipCard"
							alt="icone flip card"
						/>
					</div>
					<div className="descriptionsDog">
						<div className="descriptionDog">
							<p className="iconeDescriptionDog">🍽️</p>
							<p>{dog.favorite_foods.join(", ")}</p>
						</div>
						<div className="descriptionDog">
							<p className="iconeDescriptionDog">😱</p>
							<p>{dog.phobias.join(", ")}</p>
						</div>
						<div className="descriptionDog">
							<p className="iconeDescriptionDog">🎯</p>
							<p>{dog.hobbies.join(", ")}</p>
						</div>
						<div className="descriptionDog">
							<p className="iconeDescriptionDog">🐶</p>
							<p>{dog.personality.join(", ")}</p>
						</div>
					</div>
					<div className="likeDislikeButtons">
						<button
							type="button"
							onClick={(e) => {
								e.stopPropagation();
								handleDislike();
								toast.success(`Tu as dislike ${dog.name} !`);
							}}
							aria-label="Refuser ce chien"
						>
							<img
								src="src/assets/images/dislike_button.png"
								alt="bouton dislike"
							/>
						</button>
						<img
							src="src/assets/images/separation_like_dislike.png"
							alt="séparation entre le bouton like et le bouton dislike"
						/>
						<button
							type="button"
							onClick={(e) => {
								e.stopPropagation();
								handleLike(dog);
								toast.success(`Tu as liké ${dog.name} !`);
							}}
							aria-label="Aimer ce chien"
						>
							<img src="src/assets/images/like_button.png" alt="bouton like" />
						</button>
					</div>
				</article>
			</ReactCardFlip>
		</>
	);
}

export default CardProfile;
