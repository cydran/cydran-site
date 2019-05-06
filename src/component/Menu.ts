import {Component} from "cydran";
import TEMPLATE from "./Menu.html";

class Menu extends Component {

	constructor() {
		super('menu', () => TEMPLATE);
	}

	public handleClick(name: string): void {
		this.broadcast('navigation', 'navigate', name);
	}

}

export default Menu;
