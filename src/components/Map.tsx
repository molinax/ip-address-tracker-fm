import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import { generateMap } from "../helpers/generateMap.helper";
import type { Address } from "../models/address.model";

interface Props {
	address: Address | null;
}

const Map = ({ address }: Props) => {
	const mapContainerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!mapContainerRef.current) return;
		generateMap(mapContainerRef.current, address);
	}, [address]);

	return (
		<div
			ref={mapContainerRef}
			id="map"
			className="w-full min-h-full z-10"></div>
	);
};

export default Map;
