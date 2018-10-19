import {Component} from "cydran";
import TEMPLATE from "./BlogPost.html";

class BlogPost extends Component {

	private data: {
		title: string,
		body: string
	} = {
		title: 'Foo',
		body: 'Bar'
	};

	constructor() {
		super('blogPost', () => TEMPLATE);
	}

	protected wireListeners(): void {
	}

}

export default BlogPost;
