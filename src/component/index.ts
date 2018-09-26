import Home from './Home';
import Docs from './Docs';
import NotFound from './NotFound';
import Tutorials from './Tutorials';
import Community from './Community';
import Blog from './Blog';
import {Modules, Module} from "cydran";

Modules.getDefaultModule().associate(Home, Docs, NotFound, Tutorials, Community, Blog)
	.getRegistry()
	.registerPrototype("page:home", Home)
	.registerPrototype("page:docs", Docs)
	.registerPrototype("page:notFound", NotFound)
	.registerSingleton("page:tutorials", Tutorials)
	.registerPrototype('page:community', Community)
	.registerPrototype("page:blog", Blog);

export {};