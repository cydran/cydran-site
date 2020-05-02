import { Component } from "cydran";
import TEMPLATE from "./Regions.html";
import UlComponent from "./regions/UlComponent";
import InlineComponent from "./regions/InlineComponent";

interface Item {

	firstName: string;

	lastName: string;

}

class Regions extends Component {

	private items: Item[];

	private index: number;

	constructor() {
		super(TEMPLATE);
		this.useUlComponent();
		this.items = [
			{
				firstName: "James",
				lastName: "Kirk"
			},
			{
				firstName: "Montgomery",
				lastName: "Scott"
			},
			{
				firstName: "Leonard",
				lastName: "McCoy"
			}
		];

		this.index = 0;
	}

	public useItem(index: number): void {
		this.index = index;
	}

	public useUlComponent(): void {
		this.setChild("item", new UlComponent());
	}

	public useInlineComponent(): void {
		this.setChild("item", new InlineComponent());
	}

}

export default Regions;
