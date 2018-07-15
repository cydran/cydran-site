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

}

Registry.registerPrototype('page:home', Home);

export default Home;