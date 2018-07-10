import AppComponent from "./component/AppComponent";
import OtherComponent from "./component/OtherComponent";
import {Stage, Component} from "cydran";
import Navigo from "navigo";
import './legacy';
import './main.scss';

let router = new Navigo('/', true, '#');

let routes: any = {
	'first/:id': (data) => {
		console.log('first');
		console.log(data);
	},
	'second': () => {
		console.log('second');
	}
};

let first: Component = new AppComponent();
let second: Component = new OtherComponent();

let stage: Stage = new Stage('app');
stage.getConfig().useDebug();
stage.setComponent(first);
stage.start();

router.on(routes).resolve();

window['first'] = function() {
	stage.setComponent(first);
};


window['second'] = function() {
	stage.setComponent(second);
};

