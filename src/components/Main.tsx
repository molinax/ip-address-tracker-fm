import {
	useAddressContext,
	type IAddressContext
} from "../context/address.context";
import CardAddressInfo from "./CardAddressInfo";
import Map from "./Map";

const Main = () => {
	const { address } = useAddressContext() as IAddressContext;

	return (
		<main className="relative">
			{address && (
				<div className="absolute -top-28 left-1/2 -translate-x-1/2 z-20 content-wrapper-lg lg:-top-20">
					<CardAddressInfo address={address} />
				</div>
			)}
			<Map />
		</main>
	);
};

export default Main;
