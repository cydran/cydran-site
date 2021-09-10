import { Component, Filter, Filters, Watchable, PagedFilter } from "cydran";
import TEMPLATE from "./Tutorials.html";
import CONTENT from "./Tutorials.md";
import BlogService from "../service/BlogService";

class Tutorials extends Component {

	private mdContent: string;

	private myField: string;

	private blogService: BlogService;

	private regex: RegExp = new RegExp("[^a-zA-Z0-9\ ]+");

	private address: any;

	private counter: number;

	private lineEditable: boolean;

	private firstNameMaxLength: number;

	private color: string;

	private sillypass: string = "";

	private whichOne: string = "";

	private radioChoice: string = "";

	private selectedDropdownOption: string;

	private myValues: string[];

	private hideImage: boolean = true;

	private escapedString: string;

	private checked: boolean;

	private insideList:
		{ name: string, value: number; }[]
		= [
			{ name: 'Name 1', value: 1 },
			{ name: 'Name 2', value: 2 },
			{ name: 'Name 3', value: 3 },
			{ name: 'Name 4', value: 4 },
			{ name: 'Name 5', value: 5 }
		];

	private radioList:
		{ label: string, id: string | number; }[]
		= [
			{ id: 0, label: "Zero" },
			{ id: 1, label: "One" },
			{ id: 2, label: "Two" },
			{ id: 3, label: "Three" },
			{ id: 4, label: "Four" }
		];

	private posts: {
		title: string,
		body: string;
	}[];

	private items: {
		id?: number | string,
		title: string;
	}[];

	private filtered: PagedFilter;

	constructor() {
		super(TEMPLATE);
		this.blogService = this.get('blogService');
		this.on("updated").forChannel("blog").invoke(this.blogUpdated);
		this.on("error").forChannel("blog").invoke(this.blogError);
		this.watch("m().myField", (previous: any, current: any) => {
			this.myField = current.replace(this.regex, '');
		});

		this.myField = "Kilroy was here";
		this.mdContent = CONTENT;
		this.items = [
		];

		this.filtered = Filters.builder(this, "m().items").paged();
		this.filtered.setPageSize(3);

		this.counter = 0;
		this.selectedDropdownOption = "";

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
		this.color = "#97c024";
		this.hideImage = true;
		this.escapedString = "first & second > < >";
		this.myValues = ["2", "4"];
		this.checked = true;
	}

	public toggleImage(): void {
		this.hideImage = !this.hideImage;
	}

	public handleMyClick(): void {
		this.counter++;

		this.items.push({
			title: "Item #" + this.counter,
		});
	}

	public logItems(): void {
		this.getLogger().info(this.items);
	}

	public removeItem(id: number): void {
		this.items = this.items.filter((item) => item.id !== id);
	}

	public toggleLineEditable(): void {
		this.lineEditable = !this.lineEditable;
	}

	public handleChange(): void {
		window.alert("Changed");
	}

	public loadBlog(): void {
		this.blogService.load();
	}

	public blogUpdated(data: any): void {
		console.log(data);
		this.posts = data.items;
	}

	public blogError(error: any): void {
		console.log(error);
	}

	public sendUpdate(): void {
		this.broadcastGlobally("helloWorldChannel", "updateName", "Bob");
	}

	public popModal(): void {
		this.broadcastGlobally('modal', 'show', {
			title: 'Confirmation 1',
			name: 'helloWorld',
			closeable: true
		});
	}

	public popOtherModal(): void {
		this.broadcastGlobally('modal', 'show', {
			title: 'Confirmation 1',
			name: 'helloWorld2',
			closeable: false
		});
	}

	public popBlogModal(): void {
		this.broadcastGlobally("modal", "show", {
			title: "Blog",
			name: "wazzup",
			closeable: true
		});
	}

	public focusLastName(): void {
		this.forElement("lastName").focus();
	}

	public showProperty(): void {
		window.alert(this.getProperties().get("something.cool"));
	}

}

export default Tutorials;
