import _ from "lodash";
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

	private idCounter: number;

	private checkboxItems: {
		title: string;
		id: string;
	}[];

	private checked: string[];

	private posts: {
		id: string,
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
		this.idCounter = 0;
		this.checkboxItems = [
			{
				title: "Alpha",
				id: "1"
			},
			{
				title: "Beta",
				id: "2"
			},
			{
				title: "Gamma",
				id: "3"
			}
		];
		this.checked = ["2"];

		this.listenTo("component", "wired", this.onWired);
		this.listenTo("blog", "updated", this.blogUpdated);
		this.listenTo("blog", "error", this.blogError);

		this.watch("this.checked", (previous:any, current:any) => {
			this.getLogger().info(current);
		});

		this.watch("this.checkboxItems", (previous:any, current:any) => {
			this.getLogger().info(current);
		});
	}

	public addCheckbox(): void {
		this.checkboxItems.push({
				title: "Tau",
				id: "4"
		});
	}

	public addCheckedCheckbox(): void {
		this.checkboxItems.push({
				title: "Omega",
				id: "5"
		});

		this.checked.push("5");
	}

	public checkOmega(): void {
		this.checked.push("5");
	}

	public removeCheckbox(): void {
		_.remove(this.checkboxItems, (value) => value['title'] === 'Omega');
	}

	public handleMyClick(): void {
		window.alert(this.myField);
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
			title: this.title,
			body: this.body,
			id: id
		});

		this.getLogger().debug(this.posts);

		this.title = '';
		this.body = '';
	}

}

export default Blog;
