import { ElementMediator } from "cydran";
import { markdown } from "markdown";

class Markdown extends ElementMediator<string, HTMLElement, any> {

	public wire(): void {
		this.getModelMediator().watch(this, this.onTargetChange);
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

export default Markdown;
