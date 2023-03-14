import App from "./component/App";
import Router from "./Router";
import { StageImpl, argumentsBuilder, Stage, Context } from "cydran";
import behaviorCapability from "./behavior";
import { modalCapability } from "./component/";
import serviceCapability from "./service/";
import "./main.scss";
import { galleryCapability } from "./component/gallery/";
import BUNDLE from "./bundle.json";
import PROPERTIES from "./properties.json";
import HelloWorld from './component/HelloWorld';
import Home from './component/Home';
import Docs from './component/Docs';
import NotFound from './component/NotFound';
import Tutorials from './component/Tutorials';
import TutorialChild from './component/TutorialChild';
import Community from './component/Community';
import Blog from './component/Blog';
import Gallery from './component/Gallery';
import Hello from './component/Hello';
import Menu from './component/Menu';
import RepeatItem from './component/RepeatItem';
import Empty from './component/Empty';
import FOOTER_TEMPLATE from "./component/Footer.html";
import Intro from "./component/gallery/Intro";
import Validation from "./component/gallery/Validation";
import Regions from "./component/gallery/Regions";
import InlineComponent from "./component/gallery/regions/InlineComponent";
import RadioButtons from "./component/gallery/RadioButtons";
import MultiSelects from "./component/gallery/MultiSelects";
import SharedModel from "./component/gallery/SharedModel";
import ReadOnly from "./component/gallery/ReadOnly";
import Svg from "./component/gallery/Svg";
import CheckboxState from "./component/gallery/CheckboxState";
import Modals from "./component/gallery/Modals";
import WatchedField from "./component/gallery/WatchedField";
import FocusedEach from "./component/gallery/FocusedEach";
import Clock from "./component/gallery/Clock";

function i18n(key: string) {
	return BUNDLE[key];
}

const stage: Stage = new StageImpl("body", PROPERTIES);
stage.addPreInitializer((stage: Stage) => {
	stage.registerSingleton('router', Router, argumentsBuilder().withPubSub().build());
	stage.getScope().add('bundle', BUNDLE);
	stage.getScope().add('i18n', i18n);
	stage.getScope().add('upper', (str: string) => str.toUpperCase());
	stage.getScope().add('lower', (str: string) => str.toLowerCase());

	stage.addChild("behaviors", behaviorCapability);

	stage.registerPrototype("menu", Menu);
	stage.registerPrototype("tutorialChild", TutorialChild);
	stage.registerPrototype("page:home", Home);
	stage.registerPrototype("page:docs", Docs);
	stage.registerPrototype("page:notFound", NotFound);
	stage.registerSingleton("page:tutorials", Tutorials);
	stage.registerPrototype("page:gallery", Gallery);
	stage.registerPrototype("page:helloworld", Hello);
	stage.registerPrototype("helloWorld2", Tutorials);
	stage.registerPrototype('page:community', Community);
	stage.registerPrototype("page:blog", Blog, argumentsBuilder().with("blogService").withProperty("something.cool").build());
	stage.registerPrototype("helloWorld", HelloWorld);
	stage.registerPrototype("repeatItem", RepeatItem);
	stage.registerPrototype("repeatEmpty", Empty);
	stage.registerPrototype("wazzup", Blog, argumentsBuilder().with("blogService").withProperty("something.cool").build());
	stage.registerImplicit("footer", FOOTER_TEMPLATE);

	
	stage.registerPrototype("gallery:intro", Intro);
	stage.registerPrototype("gallery:regions", Regions);
	stage.registerPrototype("gallery:validation", Validation);
	stage.registerPrototype("gallery:radioButtons", RadioButtons);
	stage.registerPrototype("gallery:multiSelects", MultiSelects);
	stage.registerPrototype("gallery:sharedModel", SharedModel);
	stage.registerPrototype("gallery:readOnly", ReadOnly);
	stage.registerPrototype("gallery:svg", Svg);
	stage.registerPrototype("gallery:checkboxState", CheckboxState);
	stage.registerPrototype("gallery:modals", Modals);
	stage.registerPrototype("gallery:watchedField", WatchedField);
	stage.registerPrototype("gallery:focusedEach", FocusedEach);
	stage.registerPrototype("gallery:clock", Clock);
	stage.registerPrototype("inline", InlineComponent);

	stage.addChild("gallery", galleryCapability);
	stage.addChild("services", serviceCapability);
});
stage.addInitializer((stage: Stage) => {
	stage.addChild("Cydran:Components:Modal", modalCapability)
	stage.setComponent(new App());
	let router: Router = stage.getObject('router');

	router.start();
});
stage.start();
