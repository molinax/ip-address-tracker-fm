import type { Address } from "../models/address.model";

interface Props {
	address: Address;
}

const CardAddressInfo = ({ address }: Props) => {
	const { ip, timezone, isp, country, region } = address;

	return (
		<section className="bg-white px-4 py-6 rounded-2xl flex flex-col text-center lg:text-left gap-y-4 lg:flex-row lg:p-12 lg:gap-x-8">
			<article className="flex flex-col gap-y-1 lg:items-start lg:border-r lg:border-r-gray-300 lg:pr-8 lg:flex-grow">
				<h4 className="font-semibold text-dark-gray uppercase tracking-wide text-xs">
					IP Address
				</h4>
				<strong className="text-lg sm:text-2xl font-semibold">{ip}</strong>
			</article>
			<article className="flex flex-col gap-y-1 lg:items-start lg:border-r lg:border-r-gray-300 lg:pr-8 lg:flex-grow">
				<h4 className="font-semibold text-dark-gray uppercase tracking-wide text-xs">
					Location
				</h4>
				<strong className="text-lg sm:text-2xl font-semibold">{`${region}, ${country}`}</strong>
			</article>
			<article className="flex flex-col gap-y-1 lg:items-start lg:border-r lg:border-r-gray-300 lg:pr-8 lg:flex-grow">
				<h4 className="font-semibold text-dark-gray uppercase tracking-wide text-xs">
					Timezone
				</h4>
				<strong className="text-lg sm:text-2xl font-semibold">UTC {timezone}</strong>
			</article>
			<article className="flex flex-col gap-y-1 lg:items-start lg:pr-8 lg:flex-grow">
				<h4 className="font-semibold text-dark-gray uppercase tracking-wide text-xs">
					ISP
				</h4>
				<strong className="text-lg sm:text-2xl font-semibold">{isp || "None"}</strong>
			</article>
		</section>
	);
};

export default CardAddressInfo;
