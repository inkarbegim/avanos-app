import * as React from "react";

import { Algorithm, Disclaimer } from "./screens";

import { Route } from "react-router-native";

export const Router = ({ onLoad }) => {
	React.useEffect(() => {
		if (onLoad) onLoad();
	}, []);

	return (
		<React.Fragment>
			<Route
				path="/reference/bedsidePlacement"
				exact
				component={Disclaimer}
			/>
			<Route
				path="/reference/bedsidePlacement/algorithm/:id"
				component={Algorithm}
			/>
		</React.Fragment>
	);
};
