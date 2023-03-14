import { Context } from "cydran";
import MarkdownBehavior from './MarkdownBehavior';

function behaviorCapability(context: Context) {
	context.registerBehavior("markdown", ["*"], MarkdownBehavior);
}

export default behaviorCapability;
