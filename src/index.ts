import App from "./component/App";
import Router from "./Router";
import { builder, Stage, HOOKS, Logger, LoggerFactory } from "cydran";
import mediatorCapability from "./mediator/";
import { coreCapability, modalCapability } from "./component/";
import serviceCapability from "./service/";
import "./main.scss";
import { galleryCapability } from "./component/gallery/";

const bundle: any = {
	"home.hero.title": "Cydran",
	"home.hero.tagline": "An unobtrusive JavaScript library for building user interfaces",
	"home.hero.get-started": "Get Started",
	"home.hero.take-the-tutorial": "Take the Tutorial",
	"home.copyright": "2018 The Cydran Team",
	"title.label": "Blog Post Title"
};

const LOGGER: Logger = LoggerFactory.getLogger("Index");

function i18n(key: string) {
	const result: string = bundle[key];
	LOGGER.debug("I18N - key: " + key + " value: " + result);

	return result;
}

const stage: Stage = builder("body")
	.withDebugLogging()
	.withSingleton('router', Router, ["$pubSub"])
	.withScopeItem('bundle', bundle)
	.withScopeItem('i18n', i18n)
	.withScopeItem('upper', (str: string) => str.toUpperCase())
	.withScopeItem('lower', (str: string) => str.toLowerCase())
	.withCapability(mediatorCapability)
	.withCapability(coreCapability)
	.withCapability(galleryCapability)
	.withCapability(modalCapability)
	.withCapability(serviceCapability)
	.withInitializer((stage: Stage) => {
		stage.setComponent(new App());
		let router: Router = stage.get('router');

		router.start();
		stage.broadcast("devTools", "enableDigestTracing");
	})
	.build();

class A {

	public doSomething(): string {
		return "doSomething";
	}

}

class B extends A {

	public doSomethingElse(): string {
		return "doSomethingElse";
	}

}

class C extends A {

	public doSomethingMore(): string {
		return "doSomethingMore";
	}

}

class D extends C {

	public doEvenMore(): string {
		return "doEvenMore";
	}

}

window["cydraninspect"] = new D();

stage.start();

