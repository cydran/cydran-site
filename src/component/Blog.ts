import {Component} from "cydran";
import TEMPLATE from "./Tutorials.html";
import CONTENT from "./Tutorials.md";
import BlogService from "../service/BlogService";

class Blog extends Component {

	private mdContent: string;

	private myField: string;

	private errorMessage: string;

	private blogService: BlogService;

	private posts: {
		title: string,
		body: string
	}[];

	constructor() {
		super('tutorials', () => TEMPLATE);
		this.blogService = this.get('blogService');
		this.mdContent = CONTENT;
		this.myField = "Kilroy was here!";
	}

	protected wireListeners(): void {
		this.listenTo("component", "wired", this.onWired);
		this.listenTo("blog", "updated", this.blogUpdated);
		this.listenTo("blog", "error", this.blogError);
	}

	public handleMyClick(): void {
		window.alert(this.myField);
	}

	public blogUpdated(data: any): void {
		console.log(data);
		this.posts = data.items;
	}

	public blogError(error: any): void {
		console.log(error);
	}

	public onWired(): void {
		this.blogService.load();
	}

}

export default Blog;