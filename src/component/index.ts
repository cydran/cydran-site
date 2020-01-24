import HelloWorld from './HelloWorld';
import Home from './Home';
import Docs from './Docs';
import Footer from './Footer';
import NotFound from './NotFound';
import Tutorials from './Tutorials';
import Calendar from './Calendar';
import Community from './Community';
import Blog from './Blog';
import Menu from './Menu';
import ModalContainer from './ModalContainer';
import { StageBuilder, Module } from "cydran";

function coreCapability(builder: StageBuilder) {
	builder.withPrototype("menu", Menu)
		.withPrototype("footer", Footer)
		.withPrototype("calendar", Calendar)
		.withPrototype("page:home", Home)
		.withPrototype("page:docs", Docs)
		.withPrototype("page:notFound", NotFound)
		.withSingleton("page:tutorials", Tutorials)
		.withPrototype("helloWorld2", Tutorials)
		.withPrototype('page:community', Community)
		.withPrototype("page:blog", Blog)
		.withPrototype("helloWorld", HelloWorld)
		.withPrototype("wazzup", Blog)

	builder.getDefaultModule().associate(Home, Docs, NotFound, Tutorials, Community, Blog);
}

function modalCapability(builder: StageBuilder): void {
	const module: Module = builder.getModule("Cydran:Components:Modal");
	module.registerPrototype("container", ModalContainer);
	module.associate(ModalContainer);
	builder.withComponentAfter("container", "Cydran:Components:Modal");
}

export { coreCapability, modalCapability };
