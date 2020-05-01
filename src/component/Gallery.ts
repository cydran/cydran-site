import { Component } from "cydran";
import TEMPLATE from "./Gallery.html";

interface Item {

	id: string;

	title: string;

}

class Gallery extends Component {

	private activeItem: string;

	private items: Item[];

	constructor() {
		super(TEMPLATE);
		this.items = [
			{
				id: "intro",
				title: "Introduction"
			},
			{
				id: "regions",
				title: "Regions"
			}
		];
		this.activeItem = "intro";

		this.setChildFromRegistry("body", "gallery:intro");
	}

	public show(name: string): void {
		this.activeItem = name;
		this.setChildFromRegistry("body", "gallery:" + name);
	}

}

export default Gallery;
