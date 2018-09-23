import axios from "axios";
import {Modules, Registry, PubSub, Broadcaster} from "cydran";
import BlogService from "./BlogService";

class BlogServiceImpl implements BlogService {

	private pubSub: PubSub;

	private blogBroadcaster: Broadcaster;

	constructor() {
		this.pubSub = new PubSub(this);
		this.blogBroadcaster = this.pubSub.broadcastTo('blog');
	}

	public load(): void {
		axios.get("/static/blog-posts.json")
			.then((response) => {
				this.blogBroadcaster.broadcast("updated", response.data);
			}).catch((error) => {
				this.blogBroadcaster.broadcast("error", error);
			});
	}

}

Modules.getModule('main').getRegistry().registerSingleton("blogService", BlogServiceImpl);

export default BlogServiceImpl;