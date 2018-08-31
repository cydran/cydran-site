import {Component, Registry} from "cydran";
import TEMPLATE from "./NotFound.html";

class NotFound extends Component {

	constructor() {
		super('notFound', () => TEMPLATE);
	}

	protected wireListeners(): void {
		// Intentionally do nothing
	}

}

NotFound.expose("page:notFound");

export default NotFound;