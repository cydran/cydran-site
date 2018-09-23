import {Component, Broadcaster, Registry} from "cydran";
import TEMPLATE from "./Home.html";

class Home extends Component {

	private navigationBroadcaster: Broadcaster;

	constructor() {
		super('home', () => TEMPLATE);
		this.navigationBroadcaster = this.broadcastTo('navigation');
	}

	public handleClick(name: string): void {
		this.navigationBroadcaster.broadcast('navigate', name);
	}

	protected wireListeners(): void {
		// Intentionally do nothing
	}

}

export default Home;