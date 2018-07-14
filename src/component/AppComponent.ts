import MenuComponent from "./MenuComponent";
import IndexComponent from "./IndexComponent";
import DocsComponent from "./DocsComponent";
import FooterComponent from "./FooterComponent";
import TutorialsComponent from "./TutorialsComponent";
import NotFoundComponent from "./NotFoundComponent";

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
			index: new IndexComponent(),
			docs: new DocsComponent(),
			tutorials: new TutorialsComponent(),
			notFound: new NotFoundComponent()
		};

		this.setChild('menu', new MenuComponent());
		this.navigate('index');
		this.setChild('footer', new FooterComponent());
		this.listenTo('navigation', 'navigate', this.navigate);
	}

	public navigate(name: string): void {
		let component: Component = this.components[name];

		if (!component) {
			component = this.components['notFound'];
		}

		this.setChild('body', component);
	}

}

export default AppComponent;