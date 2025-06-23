import SearchInput from "./ui/SearchInput";

const Header = () => {
	return (
		<header>
			<h1>IP Address Tracker</h1>

			<form>
				<SearchInput />
			</form>
		</header>
	);
};

export default Header;
