import * as React from "react";
import { Image } from "react-native";

const steps = [
	{
		icon: (
			<Image
				style={{ width: 194, height: 166 }}
				source={require("../../../public/assets/wash-hands.png")}
			/>
		),
		title: "Wash hands",
		desc: "Wash hands and apply hand rub as per local guidelines",
	},
	{
		title: "Assemble equipment",
		desc: "See equipment list",
		link: "/stepByStep/assembleEquipment",
	},
	{
		title: "Ensure patient is in a suitable position",
		desc:
			"They should be in an upright position with head facing forward and well supported by pillows",
		icon: (
			<Image
				source={require("../../../public/assets/suitable-position.png")}
			/>
		),
	},
	{
		title:
			"The head should not be tilted back as this will aid opening of the airway",
		alert: true,
	},
	{
		title: "Open paper towel into trolley",
		desc:
			"... then open the NG tube, syringe and galipot onto the towel, Pour water into the galipot and have pH indicators accessible",
		icon: (
			<Image source={require("../../../public/assets/paper-towel.png")} />
		),
	},
	{
		title: "Put on gloves",
		icon: <Image source={require("../../../public/assets/gloves.png")} />,
	},
	{
		title: "Secure the stylet",
		desc:
			"... into the end of the tube after ensuring that it moves freely within the tube.",
		icon: (
			<Image source={require("../../../public/assets/paper-towel.png")} />
		),
	},
];

export default steps;
