import { Component } from "cydran";
import TEMPLATE from "./BlogPost.html";

class BlogPost extends Component {

	// TODO - Fix this to use repeat correctly

	private dataValue: {
		title: string,
		body: string
	} = {
			title: 'Foo',
			body: 'Bar'
		};

	constructor() {
		super('blogPost', TEMPLATE);
	}

}

export default BlogPost;
