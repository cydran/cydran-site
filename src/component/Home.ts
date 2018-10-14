import {Component, Registry} from "cydran";
import TEMPLATE from "./Home.html";

class Home extends Component {

	constructor() {
		super('home', () => TEMPLATE);
	}

	public handleClick(name: string): void {
		this.broadcast('navigation', 'navigate', name);
	}

	protected wireListeners(): void {
		// Intentionally do nothing
	}

}

export default Home;