import { createContext, useContext, useState } from "react";
import type { Address } from "../models/address.model";

export interface IAddressContext {
	address: Address | null;
	setAddress: React.Dispatch<React.SetStateAction<Address | null>>;
}

interface ProviderProps {
	children: React.ReactNode;
}

const AddressContext = createContext<IAddressContext | null>(null);

export const AddressContextProvider = ({ children }: ProviderProps) => {
	const [address, setAddress] = useState<Address | null>(null);

	return (
		<AddressContext.Provider value={{ address, setAddress }}>
			{children}
		</AddressContext.Provider>
	);
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAddressContext = () => {
	return useContext(AddressContext);
};
