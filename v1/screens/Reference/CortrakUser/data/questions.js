import Control from "../../../../components/Control";
import { Paragraph } from "../../../../components/styles";
import React from "react";
import Text from "../../../../components/Text";

export default [
	{
		id: "A",
		title: "Aspirate obtained?",
		body: <Paragraph>Was aspirate obtained?</Paragraph>,
		buttons: [
			[<Control.Text>Yes</Control.Text>, "B"],
			[<Control.Text>No</Control.Text>, "C"],
		],
		textControl: true,
	},
	{
		id: "B",
		title: "Test aspirate",
		body: (
			<Paragraph>
				Test aspirate on CE marked pH indicator paper for use with human
				aspirate e.g.{" "}
				<Text.Italic>
					<Text.Asphirate /> pH Indicator Strips
				</Text.Italic>
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
			<React.Fragment>
				<Paragraph>
					Give mouth care to patients who are nil by mouth (stimulates
					gastric secretion of acid)
				</Paragraph>
				<Paragraph>
					Call the CORTRAK* team to re-insert electromagnetic stylet
					and check position using CORTRAK* and reposition if
					necessary
				</Paragraph>
			</React.Fragment>
		),
		buttons: [[<Control.Right />, "H"]],
	},
	{
		id: "D",
		title: "Place the NG tube",
		body: (
			<Paragraph>
				Call the CORTRAK* team to reinsert electromagnetic stylet to
				re-position feeding tube
			</Paragraph>
		),
		buttons: [[<Control.Right />, "H"]],
	},
	{
		id: "E",
		title: "Proceed to feed or use tube",
		body: (
			<Paragraph>
				Record result in bedside documentation and reconfirm position
				before each feed/medication/flush or at least once daily
			</Paragraph>
		),
	},
	{
		id: "F",
		title: "Check NG position",
		body: (
			<React.Fragment>
				<Paragraph>
					Obtain Chest X-Ray and Consultant Radiologist to document
					confirmation of nasogastric tube position in stomach at all
					times.
				</Paragraph>
				<Paragraph>
					<Text.Bold>Is the NG tube in the correct place?</Text.Bold>
				</Paragraph>
			</React.Fragment>
		),
		buttons: [
			[<Control.Text>Yes</Control.Text>, "E"],
			[<Control.Text>No</Control.Text>, "G"],
		],
		textControl: true,
	},
	{
		id: "G",
		title: "Do not feed or use tube",
		body: (
			<Paragraph>
				Remove tube, re-insert, following steps from the beginning
			</Paragraph>
		),
		images: [
			require("../../../../public/assets/cortrak/1.jpg"),
			require("../../../../public/assets/cortrak/2.jpg"),
			require("../../../../public/assets/cortrak/3.jpg"),
		],
	},
	{
		id: "H",
		title: "Test aspirate",
		body: (
			<Paragraph>
				Test aspirate on CE marked pH indicator paper for use with human
				aspirate e.g.{" "}
				<Text.Italic>
					<Text.Asphirate /> pH Indicator Strips
				</Text.Italic>
			</Paragraph>
		),
		buttons: [
			[<Control.Text>≤ pH 5.5</Control.Text>, "E"],
			[<Control.Text>> pH 5.5</Control.Text>, "F"],
		],
		textControl: true,
	},
];
