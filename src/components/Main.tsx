import { useState } from "react";
import {
	useAddressContext,
	type IAddressContext
} from "../context/address.context";
import CardAddressInfo from "./CardAddressInfo";
import Map from "./Map";

const Main = () => {
	const { address } = useAddressContext() as IAddressContext;
	const [isTouched, setIsTouched] = useState(false);

	const toggleTouch = (e: React.PointerEvent) => {
		if (e.pointerType === "mouse" || e.pointerType === "touch")
			setIsTouched(!isTouched);
	};

	return (
		<main
			onPointerDown={toggleTouch}
			onPointerUp={toggleTouch}
			className="relative">
			{address && (
				<div
					className={`absolute -top-28 left-1/2 -translate-x-1/2 z-20 content-wrapper-lg ${isTouched ? "opacity-50" : "opacity-100"} transition-opacity duration-300 lg:-top-20`}>
					<CardAddressInfo address={address} />
				</div>
			)}

			<Map address={address} />
		</main>
	);
};

export default Main;
