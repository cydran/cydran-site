import {Component, Registry} from "cydran";
import TEMPLATE from "./Tutorials.html";
import CONTENT from "./Tutorials.md";

class Tutorials extends Component {

	private mdContent: string;
	private myField: string;

	constructor() {
		super('tutorials', () => TEMPLATE);
		this.mdContent = CONTENT;
		this.myField = "Kilroy was here!";
	}

	public handleMyClick(): void {
		window.alert(this.myField);
	}

}

Registry.registerSingleton('page:tutorials', Tutorials);

export default Tutorials;