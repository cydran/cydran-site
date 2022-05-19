import App from "./component/App";
import Router from "./Router";
import { builder, argumentsBuilder, Stage, Logger, LoggerFactory } from "cydran";
import behaviorCapability from "./behavior";
import { coreCapability, modalCapability } from "./component/";
import serviceCapability from "./service/";
import "./main.scss";
import { galleryCapability } from "./component/gallery/";
import BUNDLE from "./bundle.json";
import PROPERTIES from "./properties.json";

function i18n(key: string) {
	return BUNDLE[key];
}

const stage: Stage = builder("body", PROPERTIES)
	.withSingleton('router', Router, argumentsBuilder().withPubSub().build())
	.withScopeItem('bundle', BUNDLE)
	.withScopeItem('i18n', i18n)
	.withScopeItem('upper', (str: string) => str.toUpperCase())
	.withScopeItem('lower', (str: string) => str.toLowerCase())
	.withCapability(behaviorCapability)
	.withCapability(coreCapability)
	.withCapability(galleryCapability)
	.withCapability(modalCapability)
	.withCapability(serviceCapability)
	.withInitializer((stage: Stage) => {
		stage.setComponent(new App());
		let router: Router = stage.get('router');

		router.start();
	})
	.build();

stage.start();
