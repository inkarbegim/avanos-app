import React from "react";
import Control from "../../../../components/Control";
import { Paragraph } from "../../../../components/styles";

export default [
	{
		id: "A",
		title: "Aspirate obtained?",
		body: <Paragraph>Was aspirate obtained?</Paragraph>,
		buttons: [
			[<Control.Correct />, "B"],
			[<Control.Incorrect />, "C"],
		],
	},
	{
		id: "B",
		title: "Test aspirate",
		body: (
			<Paragraph>
				Test aspirate on CE marked pH indicator paper for use with human
				aspirate
			</Paragraph>
		),
		buttons: [
			[<Control.Text>≤ pH 5.5</Control.Text>, "E"],
			[<Control.Text>> pH 5.5</Control.Text>, "D"],
		],
		textControl: true,
	},
	{
		id: "C",
		title: "Mouth care",
		body: (
			<Paragraph>
				Give mouth care to patients who are nil by mouth (stimulates
				gastric secretion of acid)
			</Paragraph>
		),
		buttons: [[<Control.Right />, "D"]],
	},
	{
		id: "D",
		title: "Place the NG tube",
		body: (
			<Paragraph>
				Place the NG tube according to manufacturers instructions (MY
				OWN WORDS. PLEASE CHECK)
			</Paragraph>
		),
	},
	{
		id: "E",
		title: "Proceed to feed or use tube",
		body: (
			<Paragraph>
				Record result in bedside documentation and re confirm position
				before each feed/medication/flush or at least once daily
			</Paragraph>
		),
		buttons: [[<Control.Right />, "H"]],
	},
	{
		id: "F",
		title: "Check NG position",
		body: (
			<>
				<Paragraph>
					Obtain Chest X-Ray and Consultant Radiologist to document
					confirmation of nasogastric tube position in stomach at all
					times.
				</Paragraph>
				<Paragraph>NG tube in correct place?</Paragraph>
			</>
		),
		buttons: [
			[<Control.Correct />, "E"],
			[<Control.Incorrect />, "G"],
		],
	},
	{
		id: "G",
		title: "Do not feed or use tube",
		body: (
			<Paragraph>
				Remove tube, re-insert, following steps from the beginning
			</Paragraph>
		),
		buttons: [[<Control.Right />, "H"]],
	},
	{
		id: "H",
		title: "Procedure complete",
		body: <Paragraph>Return to reference menu</Paragraph>,
		buttons: [[<Control.Right />, "/reference", true]],
	},
];
