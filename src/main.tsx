import ReactDOM from "react-dom/client";
import "./components/reset.css";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./Router";
import { LikesProvider } from "./components/LikeContext/LikesContext";
import { MatchProvider } from "./contexts/MatchContext";

const rootElement = document.getElementById("root");

if (rootElement) {
	ReactDOM.createRoot(rootElement).render(
		<LikesProvider>
			<MatchProvider>
				<RouterProvider router={router} />
			</MatchProvider>
		</LikesProvider>,
	);
}
