import App from "./component/App";
import Router from "./Router";
import {Stage, Component, Registry} from "cydran";
import Navigo from "navigo";
import './legacy';
import './main.scss';
import './decorator/';
import './component/';

Registry.registerSingleton('router', Router);

let stage: Stage = new Stage('app');
stage.getConfig().useDebug();
stage.setComponent(new App());

stage.withInitializer(function() {
	let router: Router = this.get('router');
	router.start();
});

stage.start();
