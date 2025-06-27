import useIpifyFetch from "../hooks/useIpifyFetch";

const SearchForm = () => {
	const { getAddressByIpify, errorMessage, isLoading } = useIpifyFetch();
	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const address = e.currentTarget.elements.namedItem(
			"address"
		) as HTMLInputElement;

		await getAddressByIpify(address.value);
	};

	return (
		<form
			className="flex flex-col gap-y-1"
			onSubmit={onSubmit}>
			<fieldset className="flex">
				<input
					type="text"
					className={`flex-2 w-full bg-white py-3 pl-5 pr-10 rounded-2xl border outline-none transition-colors duration-300
      		${errorMessage ? "text-red-400 border-red-400" : "border-dark-gray text-very-dark-gray"}
      		${isLoading ? "animate-pulse bg-gray-400 text-gray-400 cursor-not-allowed" : ""}
    			`}
					placeholder="IP address or domain"
					name="address"
					disabled={isLoading}
				/>
				<button
					type="submit"
					className="bg-black py-4 px-5 rounded-r-2xl cursor-pointer inline-flex justify-center items-center ml-[-1rem] hover:bg-very-dark-gray focus:bg-very-dark-gray z-10">
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
			{errorMessage && (
				<span className="self-start font-[500] text-sm text-red-400 pl-1">
					{errorMessage}
				</span>
			)}
		</form>
	);
};

export default SearchForm;
