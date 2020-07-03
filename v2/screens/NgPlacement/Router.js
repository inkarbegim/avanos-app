import * as React from "react";
import { NgPlacement } from "./NgPlacement";
import { AssembleEquipment } from "./screens";
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
		</React.Fragment>
	);
};
