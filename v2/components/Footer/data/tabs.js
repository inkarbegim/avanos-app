import * as React from "react";
import Icon from "../../Icon";

const assetRoot = "../../../public/assets";

export default [
	{
		title: "NG Placement",
		link: "/ngPlacement",
		icon: <Icon source={require(`${assetRoot}/ng-placement.svg`)} />,
	},
	{
		title: "Reference",
		link: "/reference",
		icon: <Icon source={require(`${assetRoot}/reference.svg`)} />,
	},
	{
		title: "Questions",
		link: "/questions/0",
		icon: <Icon source={require(`${assetRoot}/questions.svg`)} />,
	},
	{
		title: "More",
		link: "/moreLinks",
		icon: <Icon source={require(`${assetRoot}/more.svg`)} />,
		iconStyle: { boxShadow: "0 5px 5px #00000040" },
	},
];
