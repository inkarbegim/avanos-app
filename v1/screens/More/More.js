import React from "react";

import Layout from "../../components/Layout";
import { Panel } from "../../components/Panel";

const options = [
	{
		title: "Useful links",
	},
	{
		title: "Contact us",
	},
	{
		title: "PDFs",
	},
	{
		title: "Visual colour test",
	},
];

export const More = ({ onLoad }) => {
	React.useEffect(() => {
		if (onLoad) onLoad();
	}, []);

	return options.map(({ title, icon, link }, key) => (
		<Panel link={link} icon={icon} key={`option-more-${key}`}>
			{title}
		</Panel>
	));
};
