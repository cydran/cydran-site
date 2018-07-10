import {Component, Broadcaster} from "cydran";

class MenuComponent extends Component {

	private navigationBroadcaster: Broadcaster;

	constructor() {
		super('menu', () => `
			<nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
			  <a class="navbar-brand" href="javascript:void(0);">Cydran</a>
			  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			    <span class="navbar-toggler-icon"></span>
			  </button>

			  <div class="collapse navbar-collapse" id="navbarSupportedContent">
			    <ul class="navbar-nav mr-auto">

			      <li class="nav-item active">
			        <a class="nav-link" href="javascript:void(0);" data-c-click="this.handleClick()">Docs<span class="sr-only">(current)</span></a>
			      </li>

			      <li class="nav-item">
			        <a class="nav-link" href="javascript:void(0);" data-c-click="this.handleClick()">Tutorial</a>
			      </li>

			      <li class="nav-item">
			        <a class="nav-link" href="javascript:void(0);" data-c-click="this.handleClick()">Community</a>
			      </li>

			      <li class="nav-item">
			        <a class="nav-link" href="javascript:void(0);" data-c-click="this.handleClick()">Blog</a>
			      </li>

			      <li class="nav-item">
			        <a class="nav-link" href="/#/first/1">First</a>
			      </li>

			      <li class="nav-item">
			        <a class="nav-link" href="/#/second">Second</a>
			      </li>

			    </ul>
			    <ul class="navbar-nav">

			      <li class="nav-item dropdown">
			        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
			          <i class="fa fa-user-o"></i>
			        </a>
			        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
			          <a class="dropdown-item" href="#">Action</a>
			          <a class="dropdown-item" href="#">Another action</a>
			          <div class="dropdown-divider"></div>
			          <a class="dropdown-item" href="javascript:void(0);" data-c-click="this.logout()">Log Out</a>
			        </div>
			      </li>

				<li class="nav-item">

				  <a class="nav-link" href="https://github.com/cydran/cydran/" target="_blank" rel="noopener">GitHub</a>
		      </li>



			    </ul>
			  </div>
			</nav>
		`);

		this.navigationBroadcaster = this.broadcastTo('navigation');
	}

	public handleClick(): void {
		this.navigationBroadcaster.broadcast('navigate', 'anything');
	}

}

export default MenuComponent;