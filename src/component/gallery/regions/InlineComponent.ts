import { Component } from "cydran";
import TEMPLATE from "./InlineComponent.html";
import Item from "./Item";

class InlineComponent extends Component {

	constructor() {
		super(TEMPLATE);
	}

	public hello(): void {
		const person: Item = this.getValue();
		window.alert("Hello " + person.firstName + "!");
	}

}

export default InlineComponent;
