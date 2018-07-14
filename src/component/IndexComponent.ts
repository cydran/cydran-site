import {Component, Broadcaster} from "cydran";
import TEMPLATE from "./IndexComponent.html";

class IndexComponent extends Component {

	private navigationBroadcaster: Broadcaster;

	constructor() {
		super('index', () => TEMPLATE);

		this.navigationBroadcaster = this.broadcastTo('navigation');
	}

	public handleClick(name: string): void {
		this.navigationBroadcaster.broadcast('navigate', name);
	}

}

export default IndexComponent;