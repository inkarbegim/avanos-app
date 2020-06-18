import React from "react";

import Wrapper from "../../components/Wrapper";
import Card from "../../components/Card";
import Step from "../../components/Step";
import equipment from "./data/equipment";

const cards = [
	{
		title: "Assemble equipment",
		children: equipment.map(({ title, desc, icon }, key) => (
			<Step
				key={`equipment-${key}`}
				active
				inline
				title={title}
				desc={desc}
				icon={icon}
			/>
		)),
		footer: "See full equipment list",
	},
	{
		title: "Wash hands",
		imageProps: {
			source: require("../../public/assets/wash-hands.png"),
			style: {
				width: 232,
				height: 198,
				resizeMode: "contain",
			},
		},
	},
	{
		title: "Ensure patient is in a suitable position i.e",
		body:
			"Patient should be in an upright position with head facing forward and well supported by pillows",
		imageProps: {
			source: require("../../public/assets/suitable-position.png"),
			style: {
				width: 170,
				height: 187,
				resizeMode: "contain",
			},
		},
	},
	{
		backgroundImage: require("../../public/assets/card-gradient.png"),
		title: "Test!",
	},
];

export const Home = () => {
	return (
		<Wrapper.Scroll>
			{cards.map(({ children, ...props }, index) => (
				<Card key={`home-card-${index}`} {...props}>
					{children}
				</Card>
			))}
		</Wrapper.Scroll>
	);
};
