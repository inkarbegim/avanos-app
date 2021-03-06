import * as React from "react";

import Control from "../../../../components/Control";
import { Paragraph } from "../../../../components/styles";

const questions = [
	{
		id: "A",
		title: "Tube radio-opaque",
		body: (
			<Paragraph>
				Assess whether the tube is fully radio-opaque throughout its
				length and tip with regular cm markings
			</Paragraph>
		),
		buttons: [
			[<Control.Text>Yes</Control.Text>, "C"],
			[<Control.Text>No</Control.Text>, "D"],
		],
		textControl: true,
	},
	{
		id: "B",
		title: "Patient rotated",
		body: <Paragraph>Is the patient rotated on X-ray?</Paragraph>,
		buttons: [
			[<Control.Text>Yes</Control.Text>, "F"],
			[<Control.Text>I don't know</Control.Text>, "E"],
			[<Control.Text>No</Control.Text>, "I"],
		],
		textControl: true,
	},
	{
		id: "C",
		title: "Tube visible",
		body: <Paragraph>Can you see the tube on chest X-ray?</Paragraph>,
		buttons: [
			[<Control.Text>Yes</Control.Text>, "B"],
			[<Control.Text>No</Control.Text>, "G"],
		],
		textControl: true,
	},
	{
		id: "D",
		title: "Do not feed",
		body: (
			<Paragraph>Radiology may not be beneficial. Do not feed.</Paragraph>
		),
	},
	{
		id: "E",
		title: "Seek senior advice",
		body: <Paragraph>Seek senior advice</Paragraph>,
	},
	{
		id: "F",
		title: "Patient rotation",
		body: (
			<Paragraph>
				Are you happy to take patient rotation into account?
			</Paragraph>
		),
		buttons: [
			[<Control.Text>Yes</Control.Text>, "I"],
			[<Control.Text>No</Control.Text>, "E"],
		],
		textControl: true,
	},
	{
		id: "G",
		title: "Do not feed",
		body: (
			<Paragraph>
				Has the tube come out? Is it coiled in the mouth/pharynx?
			</Paragraph>
		),
	},
	{
		id: "I",
		title: "Tube path",
		body: (
			<Paragraph>
				Does the tube path follow the oesophagus/avoid the contours of
				the bronchi?
			</Paragraph>
		),
		buttons: [
			[<Control.Text>Yes</Control.Text>, "K"],
			[<Control.Text>No</Control.Text>, "J"],
		],
		textControl: true,
	},
	{
		id: "J",
		title: "Do not feed",
		body: <Paragraph>Remove tube. Do not feed</Paragraph>,
	},
	{
		id: "K",
		title: "Tube position",
		body: (
			<Paragraph>
				Does the tube clearly bisect the carina or the bronchi?
			</Paragraph>
		),
		buttons: [
			[<Control.Text>Yes</Control.Text>, "N"],
			[<Control.Text>No</Control.Text>, "J"],
		],
		textControl: true,
	},
	{
		id: "N",
		title: "Diaphragm",
		body: (
			<Paragraph>Does it cross the diaphragm in the midline?</Paragraph>
		),
		buttons: [
			[<Control.Text>Yes</Control.Text>, "O"],
			[<Control.Text>No</Control.Text>, "J"],
		],
		textControl: true,
	},
	{
		id: "O",
		title: "Tip Visible",
		body: (
			<Paragraph>
				Is the tip clearly visible below the left hemi-diaphragm?
			</Paragraph>
		),
		buttons: [
			[<Control.Text>Yes</Control.Text>, "Q"],
			[<Control.Text>No</Control.Text>, "J"],
		],
		textControl: true,
	},
	{
		id: "Q", // come back here to fix image problem with text
		title: "Proceed to feed if criteria met",
		body: (
			<Paragraph>
				Proceed to feed only if all criteria are met. If in any doubt
				repeat X-ray or call for senior help.
			</Paragraph>
		),
		images: [require("../../../../public/assets/xray-conf.png")],
	},
];

export default questions;
