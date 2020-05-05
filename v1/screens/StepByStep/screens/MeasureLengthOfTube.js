import * as React from "react";
import Layout from "../../../components/Layout";
import { Title, Panel } from "../../../components/styles";

const equipment = [
	"Trolley, which has been cleaned as per hospital policy",
	"Apron and gloves",
	"Paper towel",
	"Nasogastric tube (CE marked) as per NPSA (2011) guidelines",
];

export const MeasureLengthOfTube = () => {
	return (
		<Layout title="Measure length of tube">
			{equipment.map((item, key) => (
				<Panel key={`item-${key}`}>
					<Title>{item}</Title>
				</Panel>
			))}
		</Layout>
	);
};
