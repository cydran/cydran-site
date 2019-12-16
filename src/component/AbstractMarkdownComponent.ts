import { Component } from "cydran";
import TEMPLATE from "./AbstractMarkdownComponent.html";

abstract class AbstractMarkdownComponent extends Component {

	private documentTitle: string;

	private markdown: string;

	constructor(title: string, markdown: string) {
		super(TEMPLATE, {
			title: title,
			markdown: markdown,
		});
	}

	protected init(): void {
		this.documentTitle = this.metadata().get("title");
		this.markdown = this.metadata().get("markdown") ;
	}

}

export default AbstractMarkdownComponent;
