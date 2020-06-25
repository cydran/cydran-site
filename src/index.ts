import App from "./component/App";
import Router from "./Router";
import { builder, Stage, HOOKS } from "cydran";
import mediatorCapability from "./mediator/";
import { coreCapability, modalCapability } from "./component/";
import serviceCapability from "./service/";
import "./main.scss";
import { galleryCapability } from "./component/gallery/";

const bundle: any = {
	"title.label": "Blog Post Title"
}

const stage: Stage =builder("body")
	.withInfoLogging()
	.withSingleton('router', Router, ["$pubSub"])
	.withScopeItem('bundle', bundle)
	.withScopeItem('i18n', (key: string) => bundle[key])
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

