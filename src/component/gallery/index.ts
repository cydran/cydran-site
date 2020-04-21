import { StageBuilder } from "cydran";
import Intro from "./Intro";
import Regions from "./Regions";
import InlineComponent from "./regions/InlineComponent";

function galleryCapability(builder: StageBuilder) {
	builder.withPrototype("gallery:intro", Intro)
	builder.withPrototype("gallery:regions", Regions)
	builder.withPrototype("inline", InlineComponent)
	builder.getDefaultModule().associate(Intro);
}

export { galleryCapability };
