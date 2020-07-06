import * as React from "react";

import { Icon } from "../../../components/styles";
import Step from "../../../components/Step";
import Wrapper from "../../../components/Wrapper";
import equipment from "../data/equipment";

export const AssembleEquipment = () => {
	return (
		<Wrapper.Scroll>
			{equipment.map(({ title, desc, icon }, key) => {
				console.log({ title, icon });

				return (
					<Step
						key={`equipment-${key}`}
						active
						inline
						title={title}
						desc={desc}
						icon={<Icon source={icon} color="black" />}
					/>
				);
			})}
		</Wrapper.Scroll>
	);
};
