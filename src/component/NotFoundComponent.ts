import {Component} from "cydran";
import TEMPLATE from "./NotFoundComponent.html";

class NotFoundComponent extends Component {

	constructor() {
		super('notFound', () => TEMPLATE);
	}

}

export default NotFoundComponent;