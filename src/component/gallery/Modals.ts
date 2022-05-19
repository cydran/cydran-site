import { Component } from "cydran";
import TEMPLATE from "./Modals.html";

class Modals extends Component {

	constructor() {
		super(TEMPLATE);
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

}

export default Modals;
