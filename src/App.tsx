import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {
	return (
		<div className="bg-pattern grid grid-rows-[35%_1fr] min-h-dvh">
			<Header />
			<Main />
		</div>
	);
};

export default App;
