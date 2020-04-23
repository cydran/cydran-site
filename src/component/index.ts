import HelloWorld from './HelloWorld';
import Home from './Home';
import Docs from './Docs';
import NotFound from './NotFound';
import Tutorials from './Tutorials';
import Calendar from './Calendar';
import Community from './Community';
import Blog from './Blog';
import Gallery from './Gallery';
import Menu from './Menu';
import RepeatItem from './RepeatItem';
import Empty from './Empty';
import ModalContainer from './ModalContainer';
import { StageBuilder, Module } from "cydran";
import FOOTER_TEMPLATE from "./Footer.html";

function coreCapability(builder: StageBuilder) {
	builder.withPrototype("menu", Menu)
		.withPrototype("calendar", Calendar)
		.withPrototype("page:home", Home)
		.withPrototype("page:docs", Docs)
		.withPrototype("page:notFound", NotFound)
		.withSingleton("page:tutorials", Tutorials)
		.withSingleton("page:gallery", Gallery)
		.withPrototype("helloWorld2", Tutorials)
		.withPrototype('page:community', Community)
		.withPrototype("page:blog", Blog)
		.withPrototype("helloWorld", HelloWorld)
		.withPrototype("repeatItem", RepeatItem)
		.withPrototype("repeatEmpty", Empty)
		.withPrototype("wazzup", Blog)
		.withImplicit("footer", FOOTER_TEMPLATE);

	builder.getDefaultModule().associate(Home, Docs, NotFound, Tutorials, Community, Blog);
}

function modalCapability(builder: StageBuilder): void {
	const module: Module = builder.getModule("Cydran:Components:Modal");
	module.registerPrototype("container", ModalContainer);
	module.associate(ModalContainer);
	builder.withComponentAfter("container", "Cydran:Components:Modal");
}

export { coreCapability, modalCapability };
