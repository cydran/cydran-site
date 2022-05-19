import { StageBuilder } from "cydran";
import Intro from "./Intro";
import Validation from "./Validation";
import Regions from "./Regions";
import InlineComponent from "./regions/InlineComponent";
import RadioButtons from "./RadioButtons";
import MultiSelects from "./MultiSelects";
import SharedModel from "./SharedModel";
import ReadOnly from "./ReadOnly";
import Svg from "./Svg";
import CheckboxState from "./CheckboxState";
import Modals from "./Modals";
import WatchedField from "./WatchedField";
import FocusedEach from "./FocusedEach";

function galleryCapability(builder: StageBuilder) {
	builder.withPrototype("gallery:intro", Intro);
	builder.withPrototype("gallery:regions", Regions);
	builder.withPrototype("gallery:validation", Validation);
	builder.withPrototype("gallery:radioButtons", RadioButtons);
	builder.withPrototype("gallery:multiSelects", MultiSelects);
	builder.withPrototype("gallery:sharedModel", SharedModel);
	builder.withPrototype("gallery:readOnly", ReadOnly);
	builder.withPrototype("gallery:svg", Svg);	
	builder.withPrototype("gallery:checkboxState", CheckboxState);
	builder.withPrototype("gallery:modals", Modals);
	builder.withPrototype("gallery:watchedField", WatchedField);
	builder.withPrototype("gallery:focusedEach", FocusedEach);
	builder.withPrototype("inline", InlineComponent);
	builder.getDefaultModule().associate(Intro);
}

export { galleryCapability };
