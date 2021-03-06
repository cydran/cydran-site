import { Validators, AbstractElementMediator } from "cydran";
import { markdown } from "markdown";

class Markdown extends AbstractElementMediator<string, HTMLElement, any> {

	public wire(): void {
		this.getModelMediator().watch(this, this.onTargetChange);
	}

	public unwire(): void {
		// Intentionally do nothing
	}

	protected onTargetChange(previous: string, current: string): void {
		this.setMarkdown(current);
	}

	protected validate(element: HTMLElement, check: (name: string, value?: any) => Validators): void {
		// Intentionally do nothing
	}

	private setMarkdown(source: string): void {
		if (source) {
			this.getEl().innerHTML = markdown.toHTML(source);
		}
	}

}

export default Markdown;
