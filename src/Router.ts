import {Broadcaster, PubSub, Registry} from "cydran";
import Navigo from "navigo";

interface Routes {

	[path: string]: Function;

}

class Router {

	private routes: Routes;

	private router;

	private pubSub: PubSub;

	private navigationBroadcaster: Broadcaster;

	constructor() {
		this.pubSub = new PubSub();
		this.navigationBroadcaster = this.pubSub.broadcastTo('navigation');
		let url = window.location.protocol + '//' + window.location.hostname;

		if (window.location.port) {
			url += ':';
			url += window.location.port;
		}

		this.router = new Navigo(url, true, '#');

		this.routes = {
			'/': () => {
				this.navigate('home');
			},
			'docs': () => {
				this.navigate('docs');
			},
			'tutorials': () => {
				this.navigate('tutorials');
			},
			'community': () => {
				this.navigate('community');
			},
			'blog': () => {
				this.navigate('blog');
			},
			'test/:id': (data) => {
				console.log('first');
				console.log(data);
			}
		};

	}

	private navigate(name: string): void {
		this.navigationBroadcaster.broadcast('navigate', name);
	}

	public start(): void {
		this.router
			.notFound(() => {
				this.navigate('notFound');
			})
			.on(this.routes).resolve();
	}

}

export default Router;
