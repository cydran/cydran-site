import { Component } from "cydran";
import TEMPLATE from "./Home.html";

class Home extends Component {

	constructor() {
		super(TEMPLATE);
	}

	public handleClick(name: string): void {
		this.broadcast('navigation', 'navigate', name);
	}

}

export default Home;
