import {Component, Registry} from "cydran";
import TEMPLATE from "./NotFound.html";

class NotFound extends Component {

	constructor() {
		super('notFound', () => TEMPLATE);
	}

}

Registry.registerPrototype('page:notFound', NotFound);

export default NotFound;