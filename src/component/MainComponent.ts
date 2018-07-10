import {Component} from "cydran";

class MainComponent extends Component {

	constructor() {
		super('main', () => `
			<div class="jumbotron">
				<div class="container">
					<h1 class="display-3">Cydran</h1>
					<p>
						An unobtrusive JavaScript library for building user interfaces
					</p>
					<p>
						<a href="javascript:void(0);" class="btn btn-lg btn-info">Get Started</a>
						<a href="javascript:void(0);" class="btn btn-lg btn-link">Take the Tutorial &gt;</a>
					</p>
				</div>
			</div>

			<div>
				<h1></h1>
				<p>

				</p>
			</div>
			<div class="container-fluid main-body">
				<div class="row">

					<div class="col-sm">
						&copy; 2018 The Cydran Team<br />
						<br />
						<br />
						<br />
						<br />
						<br />
						<br />
						<br />
						<br />
						<br />
						<br />
						<br />
						<br />
						<br />
						<br />
						<br />
						<br />
						<br />
						<br />
						<br />
					</div>

					<div class="col-sm">
						&copy; 2018 The Cydran Team
					</div>

					<div class="col-sm">
						&copy; 2018 The Cydran Team
					</div>

				</div>
			</div>
		`);
	}

}

export default MainComponent;