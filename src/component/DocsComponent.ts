import {Component} from "cydran";
import TEMPLATE from "./DocsComponent.html";

class DocsComponent extends Component {

	constructor() {
		super('docs', () => TEMPLATE);
	}

}

export default DocsComponent;