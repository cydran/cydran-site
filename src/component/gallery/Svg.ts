import { Component } from "cydran";
import TEMPLATE from "./Svg.html";

interface Item {

	name: string;

	value: number;

}

class Svg extends Component {

	private color: string;

	private hideImage: boolean = true;

	constructor() {
		super(TEMPLATE);
		this.color = "#97c024";
		this.hideImage = true;
	}

	public toggleImage(): void {
		this.hideImage = !this.hideImage;
	}

}

export default Svg;
