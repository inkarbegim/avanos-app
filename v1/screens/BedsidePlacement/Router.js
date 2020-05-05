import * as React from "react";

import { ScreenTitle } from "../../components/styles";
import { Disclaimer, Algorithm } from "./screens";
import { Switch, Route } from "react-router-native";

export const Router = ({ onLoad }) => {
	React.useEffect(() => {
		if (onLoad) onLoad();
	}, []);

	return (
		<>
			<ScreenTitle.Outer>
				<ScreenTitle.Inner>
					<ScreenTitle.Back />
					<ScreenTitle.Text>Bedside Placement</ScreenTitle.Text>
				</ScreenTitle.Inner>
			</ScreenTitle.Outer>

			<Switch>
				<Route path="/bedsidePlacement" exact component={Disclaimer} />
				<Route
					path="/bedsidePlacement/algorithm/:id"
					component={Algorithm}
				/>
			</Switch>
		</>
	);
};
