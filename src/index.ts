import AppComponent from "./component/AppComponent";
import OtherComponent from "./component/DocsComponent";
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

let stage: Stage = new Stage('app');
stage.getConfig().useDebug();
stage.setComponent(new AppComponent());
stage.start();

router.on(routes).resolve();

