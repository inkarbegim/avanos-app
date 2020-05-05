import * as React from "react";
import { StepByStep } from "./StepByStep";
import { AssembleEquipment, MeasureLengthOfTube } from "./screens";
import { Switch, Route } from "react-router-native";

export const Router = ({ onLoad }) => {
	React.useEffect(() => {
		if (onLoad) onLoad();
	}, []);

	return (
		<Switch>
			<Route path="/stepByStep" exact component={StepByStep} />
			<Route
				path="/stepByStep/assembleEquipment"
				component={AssembleEquipment}
			/>
			<Route
				path="/stepByStep/measureLengthOfTube"
				component={MeasureLengthOfTube}
			/>
		</Switch>
	);
};
