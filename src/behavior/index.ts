import { StageBuilder } from 'cydran';
import MarkdownBehavior from './MarkdownBehavior';

function behaviorCapability(builder: StageBuilder) {
	builder.withBehavior("markdown", ["*"], MarkdownBehavior);
}

export default behaviorCapability;
