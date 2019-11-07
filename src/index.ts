import App from "./component/App";
import Router from "./Router";
import { Stage, Modules } from "cydran";
import Navigo from "navigo";
import "./legacy";
import "./main.scss";
import "./decorator/";
import "./component/";
import "./service/";

Modules.registerSingleton('router', Router);
Modules.registerFilter('upper', (str: string) => str.toUpperCase());

let stage: Stage = new Stage("body");
window['stage'] = stage;
stage.getConfig().useDebug();

stage.withInitializer(function () {
	this.setComponent(new App());

	let router: Router = this.get('router');
	router.start();
});

stage.start();
