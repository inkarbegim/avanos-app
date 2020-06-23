import * as React from "react";

import { ScreenTitle } from "../../components/styles";
import Steps from "../../components/Steps";
import steps from "./data/steps";

export const StepByStep = () => {
	return (
		<>
			<ScreenTitle.Outer>
				<ScreenTitle.Inner>
					<ScreenTitle.Back />
					<ScreenTitle.Text>Step by step</ScreenTitle.Text>
				</ScreenTitle.Inner>
			</ScreenTitle.Outer>
			<Steps steps={steps} />
		</>
	);
};
