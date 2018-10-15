import {Component} from "cydran";
import TEMPLATE from "./AbstractMarkdownComponent.html";

abstract class AbstractMarkdownComponent extends Component {

	private title: string;

	private markdown: string;

	constructor(componentName: string, title: string, markdown: string) {
		super(componentName, () => TEMPLATE);
		this.title = title;
		this.markdown = markdown;
	}

	protected wireListeners(): void {
		// Intentionally do nothing
	}

}

export default AbstractMarkdownComponent;