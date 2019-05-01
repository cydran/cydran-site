import {Component} from "cydran";
import TEMPLATE from "./NotFound.html";

class NotFound extends Component {

	constructor() {
		super('notFound', () => TEMPLATE);
	}

}

export default NotFound;