import SearchForm from "./SearchForm";

const Header = () => {
	return (
		<header className="content-wrapper-md pt-6 text-center flex flex-col gap-y-6">
			<h1 className="text-2xl text-white font-[500]">IP Address Tracker</h1>
			<SearchForm />
		</header>
	);
};

export default Header;
