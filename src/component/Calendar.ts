import { Component, ComponentConfigBuilder } from "cydran";
import TEMPLATE from "./Calendar.html";

class Calendar extends Component {

	private localValue: string;

	constructor() {
		super(TEMPLATE, new ComponentConfigBuilder().withAttribute("thecolor").build());
	}

	public init(): void {
		this.localValue = "initialized";
	}

	public handleClick(): void {
		console.log(this.getExternals());
		this.getExternals()["thecolor"] = "#ff0000";
		console.log(this.getExternals());
	}

}

export default Calendar;
