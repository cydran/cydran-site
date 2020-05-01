import { Component } from "cydran";
import TEMPLATE from "./RepeatItem.html";

class RepeatItem extends Component {

	constructor() {
		super(TEMPLATE);
	}

	public handleClick(): void {
		this.getLogger().info(this.getValue());
	}

}

export default RepeatItem;
