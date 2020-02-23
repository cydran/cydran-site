import { Component } from "cydran";
import TEMPLATE from "./Footer.html";

class FooterView extends Component {

	constructor() {
		super(TEMPLATE);
	}

	public sendGlobal(): void {
		this.broadcastGlobally("testGlobal", "testMessage", {});
	}

}

export default FooterView;
