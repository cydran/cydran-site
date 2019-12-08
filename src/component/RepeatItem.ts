import { Component } from "cydran";
import TEMPLATE from "./RepeatItem.html";

class RepeatItem extends Component {

	constructor() {
		super('repeatItem', TEMPLATE);
	}

	public remove(): void {
		const id: string = this.getItem()["id"];
		this.broadcast("repeats", "remove", id);
	}

}

export default RepeatItem;
