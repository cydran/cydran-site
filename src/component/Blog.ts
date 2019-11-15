import { Component } from "cydran";
import TEMPLATE from "./Blog.html";
import BlogService from "../service/BlogService";

class Blog extends Component {

	private blogService: BlogService;

	private pageTitle: string;

	private body: string;

	private idCounter: number;

	private posts: {
		id: string,
		title: string,
		body: string
	}[];

	constructor() {
		super('blog', TEMPLATE);
		this.blogService = this.get('blogService');
		this.posts = [];
		this.pageTitle = '';
		this.body = '';
		this.idCounter = 0;
		this.listenTo("component", "wired", this.onWired);
		this.listenTo("blog", "updated", this.blogUpdated);
		this.listenTo("blog", "error", this.blogError);
	}

	public blogUpdated(data: any): void {
		this.getLogger().debug(data);
		this.posts = data;
	}

	public blogError(error: any): void {
		this.getLogger().error(error);
	}

	public onWired(): void {
		this.blogService.load();
	}

	public add(): void {
		this.idCounter++;
		const id: string = this.idCounter + '';

		this.posts.push({
			title: this.pageTitle,
			body: this.body,
			id: id
		});
		this.pageTitle = '';
		this.body = '';
	}

}

export default Blog;
