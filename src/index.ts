import App from "./component/App";
import Router from "./Router";
import { builder, Stage } from "cydran";
import mediatorCapability from "./mediator/";
import { coreCapability, modalCapability } from "./component/";
import serviceCapability from "./service/";
import "./main.scss";

const bundle: any = {
	"title.label": "Blog Post Title"
}

builder("body")
	.withInfoLogging()
	.withSingleton('router', Router)
	.withScopeItem('bundle', bundle)
	.withScopeItem('i18n', (key: string) => bundle[key])
	.withScopeItem('upper', (str: string) => str.toUpperCase())
	.withScopeItem('lower', (str: string) => str.toLowerCase())
	.withCapability(mediatorCapability)
	.withCapability(coreCapability)
	.withCapability(modalCapability)
	.withCapability(serviceCapability)
	.withInitializer((stage: Stage) => {
		stage.setComponent(new App());
		let router: Router = stage.get('router');
		router.start();
		stage.broadcast("devTools", "enableDigestTracing");
	})
	.build()
	.start();
