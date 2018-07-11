import {Decorator} from "cydran";
import {markdown} from "markdown";

class MarkdownDecorator extends Decorator<string> {

	public wire(): void {
		this.setMarkdown(this.getTarget());
	}

	public unwire(): void {
		// Intentionally do nothing
	}

	protected onTargetChange(value: any): void {
		this.setMarkdown(value);
	}

	private setMarkdown(source: string): void {
		this.getEl().innerHTML = markdown.toHTML(source);
	}

}

export default MarkdownDecorator;