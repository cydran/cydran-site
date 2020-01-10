import { Component, ComponentConfigBuilder } from "cydran";
import TEMPLATE from "./AbstractMarkdownComponent.html";

abstract class AbstractMarkdownComponent extends Component {

	private documentTitle: string;

	private markdown: string;

	private focusForced: boolean;

	constructor(title: string, markdown: string) {
		super(TEMPLATE, new ComponentConfigBuilder().withMetadata("title", title).withMetadata("markdown", markdown).build());
	}

	protected init(): void {
		this.documentTitle = this.metadata().get("title");
		this.markdown = this.metadata().get("markdown");
		this.focusForced = true;
	}

	public toggleForcedFocus(): void {
		this.focusForced = !this.focusForced;
	}

}

export default AbstractMarkdownComponent;
