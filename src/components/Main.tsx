import CardInfo from "./CardInfo";
import Map from "./Map";

const Main = () => {
	return (
		<main className="relative">
			<div className="absolute -top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 content-wrapper">
				<CardInfo />
			</div>
			<Map />
		</main>
	);
};

export default Main;
