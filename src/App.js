import { Switch, Route } from "react-router-dom";
import "./App.css";
import MainNavbar from './components/MainNavBar/MainNavBar'
import Home from "./pages/Home/Home";
import Resources from "./pages/Resources/Resources";
import Services from "./pages/Services/Services";
import Portfolio from "./pages/Portfolio/Portfolio";
import Faq from "./pages/Faq/Faq";
import Contacts from "./pages/Contact/Contacts";

function App() {
	return (
		<div>
			<MainNavbar />
			<Switch>
				<Route path="/" exact component={Home}/>
				<Route path="/services" component={Services}/>
				<Route path="/resources" component={Resources}/>
				<Route path="/portfolio" component={Portfolio}/>
				<Route path="/faq" component={Faq}/>
				<Route path="/contacts" component={Contacts}/>
			</Switch>
		</div>
	);
}

export default App;
