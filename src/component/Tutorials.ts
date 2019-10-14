import { Component } from "cydran";
import TEMPLATE from "./Tutorials.html";
import CONTENT from "./Tutorials.md";
import BlogService from "../service/BlogService";

class Tutorials extends Component {

	private mdContent: string;

	private myField: string;

	private errorMessage: string;

	private blogService: BlogService;

	private filter: RegExp = new RegExp("[^a-zA-Z0-9\ ]+");

	private address: any;

	private lineEditable: boolean;

	private firstNameMaxLength: number;

	private color: string;

	private sillypass: string = "";

	private whichOne: string = "";

	private insideList = [
		{name: 'Name 1', value: 1},
		{name: 'Name 2', value: 2},
		{name: 'Name 3', value: 3},
		{name: 'Name 4', value: 4},
		{name: 'Name 5', value: 5}
	];

	private posts: {
		title: string,
		body: string
	}[];

	constructor() {
		super('tutorials', TEMPLATE);
		this.blogService = this.get('blogService');
		this.myField = "Kilroy was here";
		this.mdContent = CONTENT;

		this.listenTo("blog", "updated", this.blogUpdated);
		this.listenTo("blog", "error", this.blogError);

		this.watch("this.myField", (previous: any, current: any) => {
			this.myField = current.replace(this.filter, '');
		});

		this.address = {
			firstName: "John",
			lastName: "Doe",
			line1: "123 Anystreet",
			line2: "Suite 100",
			city: "Los Angeles",
			state: "CA",
			postalCode: "90601"
		};

		this.lineEditable = true;
		this.firstNameMaxLength = 5;
		this.color = "#ffffff";
	}

	public handleMyClick(): void {
		window.alert(this.myField);
		this.blogService.load();
	}

	public toggleLineEditable(): void {
		this.lineEditable = !this.lineEditable;
	}

	public handleChange(): void {
		window.alert("Changed");
	}

	public blogUpdated(data: any): void {
		console.log(data);
		this.posts = data.items;
	}

	public blogError(error: any): void {
		console.log(error);
	}

}

export default Tutorials;
