import { Component } from "cydran";
import TEMPLATE from "./SharedModel.html";

interface Item {

	name: string;

	value: number;

}

class SharedModel extends Component {

	private sillypass: string;

	constructor() {
		super(TEMPLATE);
		this.sillypass = "";
	}

}

export default SharedModel;
