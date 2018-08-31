import AbstractMarkdownComponent from "./AbstractMarkdownComponent";
import CONTENT from "./Docs.md";

class Docs extends AbstractMarkdownComponent {

	constructor() {
		super('docs', 'Documentation', CONTENT);
	}

}

Docs.expose('page:docs');

export default Docs;