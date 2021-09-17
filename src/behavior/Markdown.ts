import { AbstractBehavior, Validators } from "cydran";
import { markdown } from "markdown";

class Markdown extends AbstractBehavior<string, HTMLElement, any> {

	public populate(): void {
		this.onChange(null, this.getMediator().get());
	}

	public onMount(): void {
		if (this.isMutable()) {
			this.getMediator().watch(this, this.onChange);
		}
	}

	protected onChange(previous: string, current: string): void {
		if (current) {
			this.getEl().innerHTML = markdown.toHTML(current);
		}
	}

}

export default Markdown;
