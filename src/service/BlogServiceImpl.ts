import axios from "axios";
import { PubSub, Logger, LoggerFactory } from "cydran";
import BlogService from "./BlogService";

class BlogServiceImpl implements BlogService {

	private pubSub: PubSub;

	private logger: Logger = LoggerFactory.getLogger("BlogServiceImpl");

	constructor(pubSub: PubSub) {
		this.pubSub = pubSub;
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

export default BlogServiceImpl;
