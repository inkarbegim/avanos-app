import React from "react";
import { Route } from "react-router-native";

import { Reference } from "./Reference";
import { CortrakUser } from "./CortrakUser/CortrakUser";
import * as BedsidePlacement from "./BedsidePlacement";
import { VisualColourTest } from "./VisualColourTest";

export const Router = () => {
	return (
		<React.Fragment>
			<Route exact path="/reference" component={Reference} />
			<Route path="/reference/cortrakUser/:id" component={CortrakUser} />
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
