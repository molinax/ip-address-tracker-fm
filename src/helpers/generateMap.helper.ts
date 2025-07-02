import L, { type PointTuple } from "leaflet";
import type { LeafletContainer } from "../models/leaflet-container.model";
import blackMarker from "../../public/icon-location.svg";
import type { Address } from "../models/address.model";

export const generateMap = (el: HTMLDivElement, address: Address | null) => {
	const id = el.id;
	const container = L.DomUtil.get(id) as LeafletContainer;
	if (container != null) container._leaflet_id = undefined;

	const view: PointTuple = [
		address?.latitude ?? 51.505,
		address?.longitude ?? -0.09
	];
	const markerIcon = L.icon({
		iconUrl: blackMarker,
		iconSize: [32, 42]
	});
	const map = L.map(id, { zoomControl: false });
	map.setView(view, 13);

	L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
		maxZoom: 19,
		attribution:
			'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
	}).addTo(map);
	L.marker(view, { icon: markerIcon }).addTo(map);

	return map;
};
