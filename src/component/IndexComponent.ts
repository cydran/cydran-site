import {Component} from "cydran";
import TEMPLATE from "./IndexComponent.html";

class IndexComponent extends Component {

	constructor() {
		super('index', () => TEMPLATE);
	}

}

export default IndexComponent;