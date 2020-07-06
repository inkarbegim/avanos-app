import * as React from "react";

import Control from "../../../../components/Control";
import { Paragraph } from "../../../../components/styles";

const questions = [
	{
		id: "A",
		title: "Tube assessment",
		body: (
			<Paragraph>
				Assess whether the tube is fully radio opaque throughout its
				length and tip with regular cm markings
			</Paragraph>
		),
		buttons: [
			[<Control.Correct />, "F"],
			[<Control.Incorrect />, "B"],
		],
	},
	{
		id: "B",
		title: "Patient rotation",
		body: <Paragraph>Is the patient rotated on X-Ray?</Paragraph>,
		buttons: [
			[<Control.Text>I don't know</Control.Text>, "D"],
			[<Control.Text>No</Control.Text>, "J"],
		],
		textControl: true,
	},
	{
		id: "C",
		title: "Do not feed",
		body: (
			<Paragraph>Radiology may not be beneficial. Do not feed</Paragraph>
		),
	},
	{
		id: "D",
		title: "Seek senior advice",
	},
	{
		id: "E",
		title: "Patient rotation",
		body: (
			<Paragraph>
				Are you happy to take patient rotation into account?
			</Paragraph>
		),
		buttons: [
			[<Control.Correct />, "J"],
			[<Control.Incorrect />, "I"],
		],
	},
	{
		id: "F",
		title: "Tube visible on X-Ray",
		body: <Paragraph>Can you see the tube on chest X-Ray?</Paragraph>,
		buttons: [[<Control.Incorrect />, "G"]],
	},
	{
		id: "G",
		title: "Do not feed",
		body: (
			<Paragraph>
				Has the tube come out? Is it coiled in the mouth/pharynx? Do not
				feed
			</Paragraph>
		),
	},
	{
		id: "H",
		title: "Tip deviation",
		body: <Paragraph>Does the tip deviate to left or right?</Paragraph>,
		buttons: [
			[<Control.Text>Left</Control.Text>, "P"],
			[<Control.Text>Right</Control.Text>, "O"],
		],
		textControl: true,
	},
	{
		id: "I",
		title: "Seek senior advice",
	},
	{
		id: "J",
		title: "Tube position",
		body: (
			<Paragraph>
				Does the tube pass down the midline deviation at bifurcation of
				trachea?
			</Paragraph>
		),
		buttons: [
			[<Control.Correct />, "K"],
			[<Control.Incorrect />, "L"],
		],
	},
	{
		id: "K",
		title: "Tip position",
		body: (
			<Paragraph>Is the tip of the tube below the diaphragm?</Paragraph>
		),
		buttons: [
			[<Control.Correct />, "H"],
			[<Control.Incorrect />, "N"],
		],
	},
	{
		id: "L",
		title: "Tube deviation",
		body: (
			<Paragraph>
				Does the tube deviate left or right at bifurcation of trachea?
			</Paragraph>
		),
		buttons: [
			[<Control.Text>Tube deviates</Control.Text>, "M"],
			[<Control.Text>Tube does not deviate</Control.Text>, "K"],
		],
		textControl: true,
	},
	{
		id: "M",
		title: "Do not feed",
		body: <Paragraph>Remove tube. Do not feed</Paragraph>,
	},
	{
		id: "N",
		title: "Advance tube",
		body: (
			<Paragraph>
				If resistance is not encountered advance the tube 5-10cm, repeat
				pH aspirate or chest X-Ray
			</Paragraph>
		),
	},
	{
		id: "O",
		title: "Do not feed",
		body: <Paragraph>Seek senior advice. Do not feed</Paragraph>,
	},
	{
		id: "P",
		title: "Safe to feed",
		body: (
			<Paragraph>
				The tube is almost certainly in the stomach. Safe to feed
			</Paragraph>
		),
	},
];

export default questions;
