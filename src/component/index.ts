import Home from './Home';
import Docs from './Docs';
import NotFound from './NotFound';
import Tutorials from './Tutorials';
import Community from './Community';
import Blog from './Blog';
import BlogPost from './BlogPost';
import {Modules, Module} from "cydran";

Modules.getDefaultModule().associate(Home, Docs, NotFound, Tutorials, Community, Blog);

Modules.registerPrototype("page:home", Home);
Modules.registerPrototype("page:docs", Docs)
Modules.registerPrototype("page:notFound", NotFound)
Modules.registerSingleton("page:tutorials", Tutorials)
Modules.registerPrototype('page:community', Community)
Modules.registerPrototype("page:blog", Blog);
Modules.registerPrototype("blogPost", BlogPost);

export {};