import { Component } from "cydran";
import TEMPLATE from "./AbstractMarkdownComponent.html";
import { markdown } from 'markdown';

abstract class AbstractMarkdownComponent extends Component {

	private documentTitle: string;

	private markdown: string;

	private focusForced: boolean;

	constructor(title: string, markdown: string) {
		super(TEMPLATE, {
			metadata: {
				title: title,
				markdown: markdown
			}
		});
		this.documentTitle = this.metadata().get("title");
		this.markdown = this.metadata().get("markdown");
		this.focusForced = true;
	}

	public toggleForcedFocus(): void {
		this.focusForced = !this.focusForced;
	}

}

export default AbstractMarkdownComponent;
