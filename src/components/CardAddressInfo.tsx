import type { Address } from "../models/address.model";

interface Props {
	address: Address;
}

const CardAddressInfo = ({ address }: Props) => {
	const { ip, timezone, isp, country, region } = address;

	return (
		<section className="bg-white px-4 py-6 rounded-2xl flex flex-col text-center gap-y-6">
			<article className="flex flex-col gap-y-1">
				<h4 className="font-semibold text-dark-gray uppercase tracking-wide text-xs">IP Address</h4>
				<strong className="text-lg font-semibold">{ip}</strong>
			</article>
			<article className="flex flex-col gap-y-1">
				<h4 className="font-semibold text-dark-gray uppercase tracking-wide text-xs">Location</h4>
				<strong className="text-lg font-semibold">{`${region} ${country}`}</strong>
			</article>
			<article className="flex flex-col gap-y-1">
				<h4 className="font-semibold text-dark-gray uppercase tracking-wide text-xs">Timezone</h4>
				<strong className="text-lg font-semibold">{timezone}</strong>
			</article>
			<article className="flex flex-col gap-y-1">
				<h4 className="font-semibold text-dark-gray uppercase tracking-wide text-xs">ISP</h4>
				<strong className="text-lg font-semibold">{isp}</strong>
			</article>
		</section>
	);
};

export default CardAddressInfo;
