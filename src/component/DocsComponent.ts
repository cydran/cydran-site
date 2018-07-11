import {Component} from "cydran";
import TEMPLATE from "./DocsComponent.html";
import CONTENT from "./DocsComponent.md";

class DocsComponent extends Component {

	private mdContent: string;

	constructor() {
		super('docs', () => TEMPLATE);
		this.mdContent = CONTENT;
	}

}

export default DocsComponent;