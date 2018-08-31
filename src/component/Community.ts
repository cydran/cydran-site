import CONTENT from "./Community.md";
import AbstractMarkdownComponent from "./AbstractMarkdownComponent";

class Community extends AbstractMarkdownComponent {

	constructor() {
		super('community', 'Community', CONTENT);
	}

}

Community.expose('page:community');

export default Community;