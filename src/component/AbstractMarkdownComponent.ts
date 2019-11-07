import { Component } from "cydran";
import TEMPLATE from "./AbstractMarkdownComponent.html";

abstract class AbstractMarkdownComponent extends Component {

	private documentTitle: string;

	private markdown: string;

	constructor(componentName: string, title: string, markdown: string) {
		super(componentName, TEMPLATE);
		this.documentTitle = title;
		this.markdown = markdown;
	}

}

export default AbstractMarkdownComponent;
