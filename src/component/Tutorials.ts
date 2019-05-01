import {Component} from "cydran";
import TEMPLATE from "./Tutorials.html";
import CONTENT from "./Tutorials.md";
import BlogService from "../service/BlogService";

class Tutorials extends Component {

	private mdContent: string;

	private myField: string;

	private errorMessage: string;

	private blogService: BlogService;

	private filter:RegExp = new RegExp("[^a-zA-Z0-9\ ]+");

	private posts: {
		title: string,
		body: string
	}[];

	constructor() {
		super('tutorials', () => TEMPLATE);
		this.blogService = this.get('blogService');
		this.mdContent = CONTENT;
		this.myField = "Kilroy was here";

		this.listenTo("blog", "updated", this.blogUpdated);
		this.listenTo("blog", "error", this.blogError);

		this.watch("this.myField", (previous:any, current:any) => {
			this.myField = current.replace(this.filter, '');
		});
	}

	public handleMyClick(): void {
		window.alert(this.myField);
		this.blogService.load();
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