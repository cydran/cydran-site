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

const LOGGER: Logger = LoggerFactory.getLogger("Index");

function i18n(key: string) {
	const result: string = BUNDLE[key];
	LOGGER.debug("I18N - key: " + key + " value: " + result);

	return result;
}

const stage: Stage = builder("body")
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
	.withProperties(PROPERTIES)
	.withInitializer((stage: Stage) => {
		stage.setComponent(new App());
		let router: Router = stage.get('router');

		router.start();
		// stage.broadcast("devTools", "enableDigestTracing");
	})
	.build();

stage.start();
