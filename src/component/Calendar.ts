import { Component } from "cydran";
import TEMPLATE from "./Calendar.html";

class Calendar extends Component {

	constructor() {
		super(TEMPLATE, {}, ["thecolor"]);
	}

	public handleClick(): void {
		console.log(this.getExternals());
		this.getExternals()["thecolor"] = "#ff0000";
		console.log(this.getExternals());
	}

}

export default Calendar;
