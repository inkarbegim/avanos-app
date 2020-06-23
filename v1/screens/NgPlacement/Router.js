import * as React from "react";
import { StepByStep } from "../NgPlacement-OLD/StepByStep";
import { AssembleEquipment, MeasureLengthOfTube } from "./screens";
import { Switch, Route } from "react-router-native";

export const Router = ({ onLoad }) => {
	React.useEffect(() => {
		if (onLoad) onLoad();
	}, []);

	return (
		<Switch>
			<Route path="/ngPlacement" exact component={StepByStep} />
			<Route
				path="/ngPlacement/assembleEquipment"
				component={AssembleEquipment}
			/>
			<Route
				path="/ngPlacement/measureLengthOfTube"
				component={MeasureLengthOfTube}
			/>
		</Switch>
	);
};
