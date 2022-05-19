import { Component } from "cydran";
import TEMPLATE from "./TutorialChild.html";

class TutorialChild extends Component {

	private localValue: string;

	constructor() {
		super(TEMPLATE);
		this.on("testMessage").forChannel("testGlobal").invoke(this.reset);
		this.reset();
	}

	public reset(): void {
		this.localValue = "initialized";
	}

	public handleClick(): void {
		console.log(this.getValue());
		this.getValue()["color"] = "#ff0000";
		console.log(this.getValue());
	}

}

export default TutorialChild;
