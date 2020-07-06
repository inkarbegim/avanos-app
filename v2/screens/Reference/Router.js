import * as BedsidePlacement from "./BedsidePlacement";

import ChestRadiograph from "./ChestRadiograph";
import CortrakUser from "./CortrakUser";
import React from "react";
import { Reference } from "./Reference";
import { Route } from "react-router-native";
import VisualColourTest from "./VisualColourTest";

export const Router = () => {
	return (
		<React.Fragment>
			<Route exact path="/reference" component={Reference} />
			<Route path="/reference/cortrakUser/:id" component={CortrakUser} />
			<Route
				path="/reference/chestRadiograph/:id"
				component={ChestRadiograph}
			/>
			<Route
				path="/reference/bedsidePlacement"
				component={BedsidePlacement.Router}
			/>
			<Route
				path="/reference/visualColourTest"
				component={VisualColourTest}
			/>
		</React.Fragment>
	);
};
