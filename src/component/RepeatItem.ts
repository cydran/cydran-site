import { RepeatComponent } from "cydran";
import TEMPLATE from "./RepeatItem.html";

class RepeatItem extends RepeatComponent {

	constructor() {
		super('repeatItem', TEMPLATE);
	}

	public remove(): void {
		const id = this["data"]["id"];
		this.broadcast("repeats", "remove", id);
	}

}

export default RepeatItem;
