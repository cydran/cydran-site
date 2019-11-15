import {Decorator} from "cydran";
import {markdown} from "markdown";

class MarkdownDecorator extends Decorator<string, HTMLElement> {

	public wire(): void {
		this.getMediator().watch(this, this.onTargetChange);
	}

	public unwire(): void {
		// Intentionally do nothing
	}

	protected onTargetChange(previous: string, current: string): void {
		this.setMarkdown(current);
	}

	private setMarkdown(source: string): void {
		if (source) {
			this.getEl().innerHTML = markdown.toHTML(source);
		}
	}

}

export default MarkdownDecorator;
