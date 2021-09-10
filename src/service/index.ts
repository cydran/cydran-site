import BlogServiceImpl from './BlogServiceImpl';
import { StageBuilder, argumentsBuilder } from 'cydran';

function serviceCapability(builder: StageBuilder) {
	builder.withSingleton("blogService", BlogServiceImpl, argumentsBuilder().withPubSub().build());
}

export default serviceCapability;
