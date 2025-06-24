import { useEffect } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const Map = () => {
	useEffect(() => {
		const map = L.map("map").setView([51.505, -0.09], 13);

		L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
			maxZoom: 19,
			attribution:
				'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
		}).addTo(map);
	}, []);

	return (
		<div
			id="map"
			className="w-full min-h-full z-10"></div>
	);
};

export default Map;
