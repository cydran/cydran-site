import BlogServiceImpl from './BlogServiceImpl';
import { StageBuilder } from 'cydran';

function serviceCapability(builder: StageBuilder) {
	builder.withSingleton("blogService", BlogServiceImpl, ["$pubSub"]);
}

export default serviceCapability;
