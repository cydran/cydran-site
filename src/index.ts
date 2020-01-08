import App from "./component/App";
import Router from "./Router";
import { Stage, Modules } from "cydran";
import "./main.scss";
import "./mediator/";
import "./component/";
import "./service/";

const bundle: any = {
	"title.label": "Blog Post Title"
}

Modules.registerSingleton('router', Router);
Modules.getScope().add('bundle', bundle);
Modules.getScope().add('i18n', (key: string) => bundle[key]);
Modules.getScope().add('upper', (str: string) => str.toUpperCase());
Modules.getScope().add('lower', (str: string) => str.toLowerCase());

let stage: Stage = new Stage("body");
window['stage'] = stage;
stage.getConfig().useDebug();

stage.withInitializer(function () {
	this.setComponent(new App());

	let router: Router = this.get('router');
	router.start();
});

stage.start();
