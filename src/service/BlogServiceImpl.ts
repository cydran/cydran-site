import axios from "axios";
import {Modules, PubSub, Logger, LoggerFactory } from "cydran";
import BlogService from "./BlogService";

class BlogServiceImpl implements BlogService {

	private pubSub: PubSub;

	private logger: Logger = LoggerFactory.getLogger("BlogServiceImpl");

	constructor() {
		this.pubSub = new PubSub(this);
	}

	public load(): void {
		axios.get("/static/blog-posts.json")
			.then((response) => {
				this.logger.info(response.data.items);
				this.pubSub.broadcast('blog', "updated", response.data.items);
			}).catch((error) => {
				this.pubSub.broadcast('blog', "error", error);
			});
	}

}

Modules.registerSingleton("blogService", BlogServiceImpl);

export default BlogServiceImpl;