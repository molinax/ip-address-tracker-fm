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
				<div className="absolute -top-25 left-1/2 -translate-x-1/2 z-20 content-wrapper">
					<CardAddressInfo address={address} />
				</div>
			)}
			<Map />
		</main>
	);
};

export default Main;
