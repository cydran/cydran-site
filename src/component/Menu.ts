import {Component} from "cydran";

class Menu extends Component {

	constructor() {
		super('menu', () => `
			<nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
			  <a class="navbar-brand" href="/#/">Cydran</a>
			  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			    <span class="navbar-toggler-icon"></span>
			  </button>

			  <div class="collapse navbar-collapse" id="navbarSupportedContent">
			    <ul class="navbar-nav mr-auto">

			      <li class="nav-item active">
			        <a class="nav-link" href="/#/docs">Docs<span class="sr-only">(current)</span></a>
			      </li>

			      <li class="nav-item">
			        <a class="nav-link" href="/#/tutorials">Tutorial</a>
			      </li>

			      <li class="nav-item">
			        <a class="nav-link" href="/#/community">Community</a>
			      </li>

			      <li class="nav-item">
			        <a class="nav-link" href="/#/blog">Blog</a>
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
	}

	public handleClick(name: string): void {
		this.broadcast('navigation', 'navigate', name);
	}

	protected wireListeners(): void {
		// Intentionally do nothing
	}

}

export default Menu;
