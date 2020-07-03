import * as React from "react";
import Step from "../../../components/Step";
import Wrapper from "../../../components/Wrapper";
import equipment from "../data/equipment";
import { withRouter } from "react-router-native";

export const AssembleEquipment = withRouter(({ history }) => {
	return (
		<Wrapper.Scroll>
			{equipment.map(({ title, desc, icon }, key) => (
				<Step
					key={`equipment-${key}`}
					active
					inline
					title={title}
					desc={desc}
					icon={icon}
				/>
			))}
		</Wrapper.Scroll>
	);
});
