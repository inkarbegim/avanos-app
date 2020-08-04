import * as React from "react";

import { AssembleEquipment, DocumentationSteps, ExampleDoc } from "./screens";

import { NgPlacement } from "./NgPlacement";
import { Route } from "react-router-native";

export const Router = ({ onLoad }) => {
	React.useEffect(() => {
		if (onLoad) onLoad();
	}, []);

	return (
		<React.Fragment>
			<Route path="/ngPlacement" exact component={NgPlacement} />
			<Route
				path="/ngPlacement/assembleEquipment"
				component={AssembleEquipment}
			/>
			<Route
				path="/ngPlacement/documentationSteps"
				component={DocumentationSteps}
			/>
			<Route path="/ngPlacement/exampleDoc" component={ExampleDoc} />
		</React.Fragment>
	);
};
