import { addressAdapter } from "../adapters/address.adapter";
import type { Address } from "../models/address.model";

export const getAddressByIpify = async (
	address?: string,
	domain?: string
): Promise<Address> => {
	try {
		const param = address ? `ipAddress=${address}` : `domain=${domain}`;
		const URL = "https://geo.ipify.org/api/v2/country,city";
		const API_KEY = import.meta.env.VITE_IPIFY_KEY;

		const res = await fetch(`${URL}?apiKey=${API_KEY}&${param}`);
		const data = await res.json();

		return addressAdapter(data);
	} catch (error) {
		throw new Error(`Error: ${error}`);
	}
};
