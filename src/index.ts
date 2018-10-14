import App from "./component/App";
import Router from "./Router";
import {Stage, Component, Registry, Modules, registerFilter} from "cydran";
import Navigo from "navigo";
import "./legacy";
import "./main.scss";
import "./decorator/";
import "./component/";
import "./service/";

Modules.getDefaultModule().getRegistry().registerSingleton('router', Router);

let stage: Stage = new Stage('app');
stage.getConfig().useDebug();

stage.withInitializer(function() {
	this.setComponent(new App());

	let router: Router = this.get('router');
	router.start();
});

stage.start();

registerFilter('upper', (str: string) => str.toUpperCase());
