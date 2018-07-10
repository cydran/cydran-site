import MenuComponent from "./MenuComponent";
import MainComponent from "./MainComponent";
import OtherComponent from "./OtherComponent";
import FooterComponent from "./FooterComponent";
import {Component} from "cydran";

class AppComponent extends Component {

	private main: Component;

	private other: Component;

	constructor() {
		super('app', () => `
			<div data-c-region="menu"></div>
			<div data-c-region="body"></div>
			<div data-c-region="footer"></div>
		`);

		this.main = new MainComponent();
		this.other = new OtherComponent();

		this.setChild('menu', new MenuComponent());
		this.setChild('body', this.main);
		this.setChild('footer', new FooterComponent());
		this.listenTo('navigation', 'navigate', this.navigate);
	}

	public navigate(componentName: string): void {
		this.setChild('body', this.other);
	}

}

export default AppComponent;