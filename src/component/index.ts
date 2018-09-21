import Home from './Home';
import Docs from './Docs';
import NotFound from './NotFound';
import Tutorials from './Tutorials';
import Community from './Community';
import Blog from './Blog';
import {Modules, Module} from "cydran";

Modules.getModule('main').associate(Home);
Modules.getModule('other').associate(Docs, NotFound, Tutorials, Community, Blog);

export {};