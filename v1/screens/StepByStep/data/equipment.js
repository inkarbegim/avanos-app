import * as React from "react";

import Trolley from "../../../public/assets/trolley.svg";
import ApronGloves from "../../../public/assets/apron-gloves.svg";
import PaperTowels from "../../../public/assets/paper-towels.svg";
import NgTube from "../../../public/assets/ng-tube.svg";
import Water from "../../../public/assets/water.svg";
import Galipot from "../../../public/assets/galipot.svg";
import EnteralSyringe from "../../../public/assets/enteral-syringe.svg";
import AspirateContainer from "../../../public/assets/aspirate-container.svg";
import PHIindicator from "../../../public/assets/ph-indicator.svg";

import Icon from "../../../components/Icon";

const assetRoot = "../../../public/assets";

const equipment = [
	{
		title: "Trolley",
		desc: "Must have been cleaned as per hospital policy",
		icon: (
			<Icon source={require(`${assetRoot}/trolley.svg`)} color="black" />
		),
	},
	{
		title: "Apron and gloves",
		icon: (
			<Icon
				source={require(`${assetRoot}/apron-gloves.svg`)}
				color="black"
			/>
		),
	},
	{
		title: "Paper towels",
		icon: (
			<Icon
				source={require(`${assetRoot}/paper-towels.svg`)}
				color="black"
			/>
		),
	},
	{
		title: "Nasogastric tube",
		desc: "(CE marked) as per NPSA 2011 guidelines",
		icon: (
			<Icon source={require(`${assetRoot}/ng-tube.svg`)} color="black" />
		),
	},
	{
		title: "Water",
		icon: <Icon source={require(`${assetRoot}/water.svg`)} color="black" />,
	},
	{
		title: "Reciever",
		desc: "(galipot)",
		icon: (
			<Icon source={require(`${assetRoot}/galipot.svg`)} color="black" />
		),
	},
	{
		title: "Enteral syringe",
		icon: (
			<Icon
				source={require(`${assetRoot}/enteral-syringe.svg`)}
				color="black"
			/>
		),
	},
	{
		title: "Container from aspirate",
		icon: (
			<Icon
				source={require(`${assetRoot}/aspirate-container.svg`)}
				color="black"
			/>
		),
	},
	{
		title: "pH indicator strips/paper",
		icon: (
			<Icon
				source={require(`${assetRoot}/ph-indicator.svg`)}
				color="black"
			/>
		),
	},
];

export default equipment;
