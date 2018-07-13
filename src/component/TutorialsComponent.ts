import {Component} from "cydran";
import TEMPLATE from "./TutorialsComponent.html";
import CONTENT from "./TutorialsComponent.md";

class DocsComponent extends Component {

	private mdContent: string;

	constructor() {
		super('tutorials', () => TEMPLATE);
		this.mdContent = CONTENT;
	}

}

export default DocsComponent;