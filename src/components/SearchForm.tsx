import { useState } from "react";
import {
	useAddressContext,
	type IAddressContext
} from "../context/address.context";
import { getAddressByIpify } from "../services/address.service";

const SearchForm = () => {
	const { setAddress } = useAddressContext() as IAddressContext;
	const [addressError, setAddressError] = useState("");
	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const address = e.currentTarget.elements.namedItem(
			"address"
		) as HTMLInputElement;
		const addressVal = address.value;
		const ipRegex = /^(?:\d{1,3}\.){3}\d{1,3}$/;
		const urlRegex =
			/^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(:\d+)?(\/\S*)?$/;

		if (!ipRegex.test(addressVal) && !urlRegex.test(addressVal)) {
			setAddressError("Invalid address");
			return;
		}

		const data = ipRegex.test(addressVal)
			? await getAddressByIpify(addressVal)
			: await getAddressByIpify(undefined, addressVal);

		setAddress(data);
		setAddressError("");
	};

	return (
		<form
			className="flex flex-col gap-y-1"
			onSubmit={onSubmit}>
			<fieldset className="flex">
				<input
					type="text"
					className={`flex-2 bg-white py-3 pl-5 pr-6 rounded-2xl border ${addressError ? "text-red-400 border-red-400" : "border-dark-gray text-very-dark-gray"} outline-none`}
					placeholder="IP address or domain"
					name="address"
				/>
				<button
					type="submit"
					className="bg-black py-4 px-5 rounded-r-2xl cursor-pointer inline-flex justify-center items-center ml-[-1rem] hover:bg-very-dark-gray focus:bg-very-dark-gray">
					<svg
						width="11"
						height="14">
						<path
							fill="none"
							stroke="#FFF"
							strokeWidth="3"
							d="M2 1l6 6-6 6"
						/>
					</svg>
				</button>
			</fieldset>
			{addressError && (
				<span className="self-start font-[500] text-sm text-red-400 pl-1">
					{addressError}
				</span>
			)}
		</form>
	);
};

export default SearchForm;
