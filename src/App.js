import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

function App() {
	return (
		<Router>
			<Header />
			<Main />
			<Footer />
		</Router>
	);
}

export default App;
