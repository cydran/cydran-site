import { Component } from "cydran";
import TEMPLATE from "./Hello.html";

interface Item {

	id?: string;

	name: string;

}

class Hello extends Component {

	private name: string;

	private items: Item[];

	constructor() {
		super(TEMPLATE);
		this.items = [];
		this.name = "";
	}

	public add(): void {
		this.items.push({
			name: this.name
		});

		this.name = "";
	}

}

export default Hello;
