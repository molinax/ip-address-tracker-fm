import {
	useAddressContext,
	type ContextProps
} from "../context/address.context";
import { getAddressByIpify } from "../services/address.service";

const SearchForm = () => {
	const { setAddress } = useAddressContext() as ContextProps;
	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const addressVal = e.currentTarget.elements.namedItem("address") as HTMLInputElement;
	
		if (addressVal) {
			const data = await getAddressByIpify(addressVal.value);
			setAddress(data);
		}
	}

	return (
		<form className="flex" onSubmit={onSubmit}>
			<input
				type="text"
				className="bg-white text-very-dark-gray flex-2 py-3 pl-5 pr-6 rounded-2xl border border-dark-gray outline-none"
				placeholder="IP address"
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
		</form>
	);
};

export default SearchForm;
