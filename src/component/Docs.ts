import {Component, Registry} from "cydran";
import TEMPLATE from "./Docs.html";
import CONTENT from "./Docs.md";

class DocsComponent extends Component {

	private mdContent: string;

	constructor() {
		super('docs', () => TEMPLATE);
		this.mdContent = CONTENT;
	}

}

Registry.registerPrototype('page:docs', DocsComponent);

export default DocsComponent;