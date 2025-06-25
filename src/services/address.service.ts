import { addressAdapter } from "../adapters/address.adapter";
import type { Address } from "../models/address.model";

export const getAddressByIpify = async (address: string): Promise<Address> => {
	const URL = "https://geo.ipify.org/api/v2/country,city";
	const API_KEY = import.meta.env.VITE_IPIFY_KEY;
	const res = await fetch(`${URL}?apiKey=${API_KEY}&ipAddress=${address}`);

	if (!res.ok) throw new Error("No se pudo obtener la dirección");

	const data = await res.json();
	return addressAdapter(data);
};
