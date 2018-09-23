import AbstractMarkdownComponent from "./AbstractMarkdownComponent";
import CONTENT from "./Docs.md";

class Docs extends AbstractMarkdownComponent {

	constructor() {
		super('docs', 'Documentation', CONTENT);
	}

}

export default Docs;