import {Component} from "cydran";
import TEMPLATE from "./TutorialsComponent.html";
import CONTENT from "./TutorialsComponent.md";

class TutorialsComponent extends Component {

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

export default TutorialsComponent;