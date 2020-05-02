import { Component } from "cydran";
import TEMPLATE from "./InlineComponent.html";

class InlineComponent extends Component {

	constructor() {
		super(TEMPLATE);
	}

	public hello(): void {
		window.alert("Hello " + this.getValue()["firstName"] + "!");
	}

}

export default InlineComponent;
