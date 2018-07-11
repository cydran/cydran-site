import MenuComponent from "./MenuComponent";
import MainComponent from "./MainComponent";
import OtherComponent from "./OtherComponent";
import FooterComponent from "./FooterComponent";
import {Component} from "cydran";

class AppComponent extends Component {

	private components: {
		[name: string]: Component;
	}

	constructor() {
		super('app', () => `
			<div data-c-region="menu"></div>
			<div data-c-region="body"></div>
			<div data-c-region="footer"></div>
		`);

		this.components = {
			main: new MainComponent(),
			other: new OtherComponent()
		};

		this.setChild('menu', new MenuComponent());
		this.navigate('main');
		this.setChild('footer', new FooterComponent());
		this.listenTo('navigation', 'navigate', this.navigate);
	}

	public navigate(name: string): void {
		this.setChild('body', this.components[name]);
	}

}

export default AppComponent;