import {Component, Registry} from "cydran";
import TEMPLATE from "./Community.html";

class Community extends Component {

	constructor() {
		super('community', () => TEMPLATE);
	}

}

Registry.registerPrototype('page:community', Community);

export default Community;