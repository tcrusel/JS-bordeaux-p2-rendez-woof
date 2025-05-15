import { createContext, useContext, useState } from "react";
import type { DogType } from "../components/LikeContext/LikesContext";

interface MatchContextType {
	matchingDogs: DogType[];

	setMatchingDogs: React.Dispatch<React.SetStateAction<DogType[]>>;
}

const MatchContext = createContext<MatchContextType | null>(null);

export const MatchProvider = ({ children }: { children: React.ReactNode }) => {
	const [matchingDogs, setMatchingDogs] = useState<DogType[]>([]);

	return (
		<MatchContext.Provider value={{ matchingDogs, setMatchingDogs }}>
			{children}
		</MatchContext.Provider>
	);
};

export const useMatch = () => {
	const value = useContext(MatchContext);

	if (value === null) {
		throw new Error("erreur");
	}

	return value;
};
