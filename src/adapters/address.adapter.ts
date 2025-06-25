import type { Address, AddressResponse } from "../models/address.model";

export const AddressAdapter = (data: AddressResponse): Address => {
	return {
		ip: data.ip,
		location: { ...data.location },
		isp: data.isp
	};
};
