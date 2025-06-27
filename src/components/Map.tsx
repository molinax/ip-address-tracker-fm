import { useEffect } from "react";
import {
	useAddressContext,
	type IAddressContext
} from "../context/address.context";
import { generateMap } from "../helpers/generateMap.helper";
import "leaflet/dist/leaflet.css";

const Map = () => {
	const { address } = useAddressContext() as IAddressContext;

	useEffect(() => {
		if (address) {
			generateMap("map", address.latitude, address.longitude, 13);
			return;
		}

		const defaultPos = [51.505, -0.09];
		const defaultZoom = 13;
		generateMap("map", defaultPos[0], defaultPos[1], defaultZoom);
	}, [address]);

	return (
		<div
			id="map"
			className="w-full min-h-full z-10"></div>
	);
};

export default Map;
