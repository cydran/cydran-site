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
		this.listenTo('navigation', 'navigate', this.navigate);
	}

	public navigate(name: string): void {
		let component: Component = this.get('page:' + name);

		if (!component) {
			component = this.get('page:notFound');
		}

		this.setChild('body', component);
	}

}

export default App;