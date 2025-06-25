import type { Address, AddressResponse } from "../models/address.model";

export const addressAdapter = (data: AddressResponse): Address => {
	return {
		ip: data.ip,
		country: data.location.country,
		region: data.location.region,
		city: data.location.city,
		latitude: data.location.lat,
		longitude: data.location.lng,
		postalCode: data.location.postalCode,
		timezone: data.location.timezone,
		geonameId: data.location.geonameId,
		isp: data.isp
	};
};
