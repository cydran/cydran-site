import {Component} from "cydran";

class FooterView extends Component {

	constructor() {
		super('footer', () => `
<footer class="footer">

	<div class="container">
		<div class="row">
			<div class="col-sm">
				&copy; 2018 The Cydran Team
			</div>
			<div class="col-sm">

				<h2>Docs</h2>

				<ul>
					<li>
						<a href="#">One of three columns</a>
					</li>
					<li>
						<a href="#">One of three columns</a>
					</li>
					<li>
						<a href="#">One of three columns</a>
					</li>
					<li>
						<a href="#">One of three columns</a>
					</li>
				</ul>

				<h2>Community</h2>

				<ul>
					<li>
						<a href="#">One of three columns</a>
					</li>
					<li>
						<a href="#">One of three columns</a>
					</li>
				</ul>

			</div>
			<div class="col-sm">

				<h2>Channels</h2>

				<ul>
					<li>
						<a href="#">One of three columns</a>
					</li>
					<li>
						<a href="#">One of three columns</a>
					</li>
					<li>
						<a href="#">One of three columns</a>
					</li>
					<li>
						<a href="#">One of three columns</a>
					</li>
				</ul>

				<h2>More</h2>

				<ul>
					<li>
						<a href="#">One of three columns</a>
					</li>
					<li>
						<a href="#">One of three columns</a>
					</li>
				</ul>



			</div>
		</div>
	</div>

</footer>
		`);
	}

}

export default FooterView;