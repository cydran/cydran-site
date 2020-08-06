import { Component, Events } from "cydran";
import TEMPLATE from "./App.html";

class App extends Component {

	private value: {
		first: string;
	};

	constructor() {
		super(TEMPLATE);
		this.on("navigate").forChannel("navigation").invoke(this.navigate);
		this.on(Events.AFTER_CHILD_CHANGED).invoke(this.onRegionChange);
		this.value = {
			first: "A parent value"
		};
	}

	public navigate(name: string): void {
		this.setChildFromRegistry("body", 'page:' + name, 'page:notFound');
	}

	public onRegionChange(payload: { name: string; }): void {
		this.getLogger().ifTrace(() => "Updated region: " + payload.name);
	}

}

export default App;
