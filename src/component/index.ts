import Home from './Home';
import Docs from './Docs';
import Footer from './Footer';
import NotFound from './NotFound';
import Tutorials from './Tutorials';
import Community from './Community';
import Blog from './Blog';
import Menu from './Menu';
import EmptyRepeat from "./EmptyRepeat";
import RepeatItem from "./RepeatItem";
import SelectItem from "./SelectItem";
import { Modules } from "cydran";

Modules.getDefaultModule().associate(Home, Docs, NotFound, Tutorials, Community, Blog);

Modules.registerPrototype("menu", Menu);
Modules.registerPrototype("footer", Footer);
Modules.registerPrototype("emptyRepeat", EmptyRepeat);
Modules.registerPrototype("repeatItem", RepeatItem);
Modules.registerPrototype("selectItem", SelectItem);
Modules.registerPrototype("page:home", Home);
Modules.registerPrototype("page:docs", Docs)
Modules.registerPrototype("page:notFound", NotFound)
Modules.registerSingleton("page:tutorials", Tutorials)
Modules.registerPrototype('page:community', Community)
Modules.registerPrototype("page:blog", Blog);

export {};
