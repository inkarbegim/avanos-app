import * as React from "react";

import Icon from "../../../components/Icon";
import Step from "../../../components/Step";
import Wrapper from "../../../components/Wrapper";
import equipment from "../data/equipment";

export const AssembleEquipment = () => {
	return (
		<Wrapper.Scroll>
			{equipment.map(({ title, desc, icon }, key) => {
				return (
					<Step
						key={`equipment-${key}`}
						active
						inline
						title={title}
						desc={desc}
						icon={<Icon source={icon} color="black" height={45} />}
					/>
				);
			})}
		</Wrapper.Scroll>
	);
};
