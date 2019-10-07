import Menu from "./Menu";
import Footer from "./Footer";
import { Component } from "cydran";
import TEMPLATE from "./App.html";

class App extends Component {

	constructor() {
		super('app', TEMPLATE);
		this.setChild('menu', new Menu());
		this.setChild('footer', new Footer());
		this.listenTo('navigation', 'navigate', this.navigate);
	}

	public navigate(name: string): void {
		this.setChildFromRegistry("body", 'page:' + name, 'page:notFound')
	}

}

export default App;
