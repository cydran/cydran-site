import axios from "axios";
import {Modules, Registry, PubSub} from "cydran";
import BlogService from "./BlogService";

class BlogServiceImpl implements BlogService {

	private pubSub: PubSub;

	constructor() {
		this.pubSub = new PubSub(this);
	}

	public load(): void {
		axios.get("/static/blog-posts.json")
			.then((response) => {
				this.pubSub.broadcast('blog', "updated", response.data);
			}).catch((error) => {
				this.pubSub.broadcast('blog', "error", error);
			});
	}

}

Modules.getDefaultModule().getRegistry().registerSingleton("blogService", BlogServiceImpl);

export default BlogServiceImpl;