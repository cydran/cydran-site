import App from "./component/App";
import Router from "./Router";
import { Stage, Modules } from "cydran";
import Navigo from "navigo";
import "./legacy";
import "./main.scss";
import "./decorator/";
import "./component/";
import "./service/";

const bundle: any = {
	"title.label": "Blog Post Title"
}

Modules.registerSingleton('router', Router);
Modules.registerFilter('i18n', (key: string) => bundle[key]);
Modules.registerFilter('upper', (str: string) => str.toUpperCase());
Modules.registerFilter('lower', (str: string) => str.toLowerCase());

let stage: Stage = new Stage("body");
window['stage'] = stage;
stage.getConfig().useDebug();

stage.withInitializer(function () {
	this.setComponent(new App());

	let router: Router = this.get('router');
	router.start();
});

stage.start();
