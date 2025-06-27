import { useState } from "react";
import { addressAdapter } from "../adapters/address.adapter";
import {
	useAddressContext,
	type IAddressContext
} from "../context/address.context";

const useIpifyFetch = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");
	const { setAddress } = useAddressContext() as IAddressContext;

	const ERROR_MESSAGES = {
		invalid: "Please send a valid address",
		notFound: "The address not found. Try another"
	};

	
	const getAddressByIpify = async (queryParam: string) => {
		setIsLoading(true);

		const ipRegex = /^(?:\d{1,3}\.){3}\d{1,3}$/;
		const urlRegex =
			/^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(:\d+)?(\/\S*)?$/;

		if (!ipRegex.test(queryParam) && !urlRegex.test(queryParam)) {
			setErrorMessage(ERROR_MESSAGES.invalid);
			setIsLoading(false);
			return;
		}

		const addressMethod = ipRegex.test(queryParam)
			? `ipAddress=${queryParam}`
			: `domain=${queryParam}`;
		const API_KEY = import.meta.env.VITE_IPIFY_KEY;
		const URL = `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&${addressMethod}`;

		try {
			const res = await fetch(URL);
			const data = await res.json();
			const parsedData = addressAdapter(data);
			setAddress(parsedData);
			setErrorMessage("");
		} catch {
			setErrorMessage(ERROR_MESSAGES.notFound);
		} finally {
			setIsLoading(false);
		}
	};

	return { getAddressByIpify, isLoading, errorMessage };
};

export default useIpifyFetch;
