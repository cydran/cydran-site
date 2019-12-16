import { Component, ComponentConfigBuilder } from "cydran";
import TEMPLATE from "./Calendar.html";

class Calendar extends Component {

	constructor() {
		super(TEMPLATE, new ComponentConfigBuilder().withAttribute("thecolor").build());
	}

	public handleClick(): void {
		console.log(this.getExternals());
		this.getExternals()["thecolor"] = "#ff0000";
		console.log(this.getExternals());
	}

}

export default Calendar;
