import { Component } from "cydran";
import TEMPLATE from "./Menu.html";

class Menu extends Component {

	private expanded: boolean;

	constructor() {
		super(TEMPLATE);
		this.expanded = false;
	}

	public handleClick(name: string): void {
		this.broadcast('navigation', 'navigate', name);
	}

	public handleMenuToggle(): void {
		this.expanded = !this.expanded;
	}

	public sendUpdate(): void {
		this.broadcastGlobally("helloWorldChannel", "updateName", "Bob");
	}

}

export default Menu;
