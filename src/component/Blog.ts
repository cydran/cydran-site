import {Component} from "cydran";
import TEMPLATE from "./Blog.html";
import BlogService from "../service/BlogService";

class Blog extends Component {

	private mdContent: string;

	private myField: string;

	private errorMessage: string;

	private blogService: BlogService;

	private title: string;

	private body: string;

	private posts: {
		title: string,
		body: string
	}[];

	constructor() {
		super('blog', () => TEMPLATE);
		this.blogService = this.get('blogService');
		this.myField = "Kilroy was here!";
		this.posts = [];
		this.title = '';
		this.body = '';
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
		this.posts = data;
	}

	public blogError(error: any): void {
		console.log(error);
	}

	public onWired(): void {
		this.blogService.load();
	}

	public add(): void {
		this.posts.push({
			title: this.title,
			body: this.body
		});

		console.log(this.posts);

		this.title = '';
		this.body = '';
	}

}

export default Blog;
