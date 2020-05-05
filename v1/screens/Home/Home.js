import * as React from "react";

import Wrapper from "../../components/Wrapper";
import { Panel } from "../../components/Panel";
import Icon from "../../components/Icon";

const assetRoot = "../../public/assets";

const options = [
	{
		title: "Step-by-step NG placement",
		icon: <Icon source={require(`${assetRoot}/step-by-step.svg`)} />,
		link: "/stepByStep",
	},
	{
		title: "Bedside Placement",
		icon: <Icon source={require(`${assetRoot}/bed.svg`)} />,
		link: "/bedsidePlacement",
	},
	{
		title: "Chest Radiograph",
		icon: <Icon source={require(`${assetRoot}/lungs.svg`)} />,
	},
	{
		title: "Multiple Choice Questions",
		icon: <Icon source={require(`${assetRoot}/question.svg`)} />,
		link: "/multipleChoiceQuestions/0",
	},
	{
		title: "Useful Links",
		icon: <Icon source={require(`${assetRoot}/ellipsis.svg`)} />,
	},
	{
		title: "Cortrak EAS User",
		icon: <Icon source={require(`${assetRoot}/refresh.svg`)} />,
	},
];

export const Home = ({ onLoad }) => {
	React.useEffect(() => {
		if (onLoad) onLoad();
	}, []);

	return (
		<Wrapper.Scroll>
			{options.map(({ title, icon, link }, key) => (
				<Panel link={link} icon={icon} key={`option-home-${key}`}>
					{title}
				</Panel>
			))}
		</Wrapper.Scroll>
	);
};
