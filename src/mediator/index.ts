import Markdown from './Markdown';
import { StageBuilder } from 'cydran';

function mediatorCapability(builder: StageBuilder) {
	builder.withElementMediator('markdown', ['*'], Markdown);
}

export default mediatorCapability;
