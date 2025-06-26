import L from "leaflet";
import type { LeafletContainer } from "../models/leaflet-container.model";

export const generateMap = (
	id: string,
	lat: number,
	long: number,
	zoom: number = 13
) => {
	const container = L.DomUtil.get(id) as LeafletContainer;
	if (container != null) container._leaflet_id = undefined;

	const map = L.map(id, {
		zoomControl: false
	});
	map.dragging.enabled();
	map.setView([lat, long], zoom);

	L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
		maxZoom: 19,
		attribution:
			'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
	}).addTo(map);

	L.marker([lat, long]).addTo(map);
};
