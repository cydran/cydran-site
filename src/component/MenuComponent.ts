import {Component, Broadcaster} from "cydran";

class MenuComponent extends Component {

	private navigationBroadcaster: Broadcaster;

	constructor() {
		super('menu', () => `
			<nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
			  <a class="navbar-brand" href="javascript:void(0);" data-c-click="this.handleClick('index')">Cydran</a>
			  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			    <span class="navbar-toggler-icon"></span>
			  </button>

			  <div class="collapse navbar-collapse" id="navbarSupportedContent">
			    <ul class="navbar-nav mr-auto">

			      <li class="nav-item active">
			        <a class="nav-link" href="javascript:void(0);" data-c-click="this.handleClick('docs')">Docs<span class="sr-only">(current)</span></a>
			      </li>

			      <li class="nav-item">
			        <a class="nav-link" href="javascript:void(0);" data-c-click="this.handleClick('tutorial')">Tutorial</a>
			      </li>

			      <li class="nav-item">
			        <a class="nav-link" href="javascript:void(0);">Community</a>
			      </li>

			      <li class="nav-item">
			        <a class="nav-link" href="javascript:void(0);">Blog</a>
			      </li>

			    </ul>
			    <ul class="navbar-nav">

				<li class="nav-item">

				<a class="nav-link" href="https://github.com/cydran/cydran/" target="_blank" rel="noopener">GitHub</a>
		      </li>



			    </ul>
			  </div>
			</nav>
		`);

		this.navigationBroadcaster = this.broadcastTo('navigation');
	}

	public handleClick(name: string): void {
		this.navigationBroadcaster.broadcast('navigate', name);
	}

}

export default MenuComponent;