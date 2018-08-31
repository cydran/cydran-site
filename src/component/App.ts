import Menu from "./Menu";
import Footer from "./Footer";
import {Component} from "cydran";

class App extends Component {

	constructor() {
		super('app', () => `
			<div data-c-region="menu"></div>
			<div data-c-region="body"></div>
			<div data-c-region="footer"></div>
		`);

		this.setChild('menu', new Menu());
		this.setChild('footer', new Footer());
	}

	public navigate(name: string): void {
		this.setChildFromRegistry("body", 'page:' + name, 'page:notFound')
	}

	protected wireListeners(): void {
		this.listenTo('navigation', 'navigate', this.navigate);
	}

}

export default App;