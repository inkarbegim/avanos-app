import React from "react";
import Step from "../../../components/Step";
import Wrapper from "../../../components/Wrapper";
import documentationSteps from "../data/documentation-steps";

export const DocumentationSteps = () => {
	return (
		<Wrapper.Scroll>
			{documentationSteps.map((title, key) => {
				return <Step key={`doc-${key}`} active title={title} />;
			})}
		</Wrapper.Scroll>
	);
};
