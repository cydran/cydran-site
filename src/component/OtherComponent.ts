
import {Component} from "cydran";

class OtherComponent extends Component {

	private name: string;

	constructor() {
		super('app', () => `
			<div>
				<h1>Other</h1>
				<input type="text" data-c-model="this.name" />
			</div>
		`);

		this.name = 'Bob';
	}

}

export default OtherComponent;