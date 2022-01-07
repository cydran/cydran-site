import Markdown from './Markdown';
import { StageBuilder } from 'cydran';

function behaviorCapability(builder: StageBuilder) {
	builder.withBehavior('markdown', ['*'], Markdown);
}

export default behaviorCapability;
