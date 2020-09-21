import * as React from "react";

import { Bold, BottomRule, Paragraph } from "../../../../components/styles";

import Control from "../../../../components/Control";
import Icon from "../../../../components/Icon";
import { Panel } from "../../../../components/Panel";
import Steps from "../../../../components/Steps";
import Text from "../../../../components/Text";
import theme from "../../../../theme";

const questions = [
	{
		id: "A",
		title: "Is the patient on gastric acid suppresion medication?",
		body: (
			<>
				<Paragraph>
					e.g. Proton pump inhibitors or H2 antagonists
				</Paragraph>
				<Paragraph>
					If you are unsure, check with a senior member of staff
				</Paragraph>
			</>
		),
		buttons: [
			[<Control.Text>Yes</Control.Text>, "B"],
			[<Control.Text>No</Control.Text>, "C"],
		],
		textControl: true,
	},
	{
		id: "B",
		title: "Important note: Gastric acid suppressing medications",
		body: (
			<>
				<Paragraph>
					If patient is on acid suppression medication all the same
					manoeuvres, as outlined in this algorithm, can be used but
					the pH of the aspirate may not fall below 5.5 even when NG
					tube is correctly placed.
				</Paragraph>
				<Paragraph>
					Attempting aspirate before or 4 hours after acid suppression
					medication administration may help with attaining pH of
					below 5.5.
				</Paragraph>
				<Paragraph>
					When on gastric acid suppression, on checking position of NG
					tube <Text.Bold>at first insertion</Text.Bold>, if the pH is
					recurrently above 5.5, X-ray confirmation of NG tube is
					mandatory to confirm the position on first insertion.
				</Paragraph>
				<Paragraph>
					When on gastric acid suppression, on checking position of NG
					tube{" "}
					<Text.Bold>
						consequently to initially correct position confirmation
					</Text.Bold>
					, if the pH is recurrently above 5.5 the NPSA recommend use
					of surrogate markers of position to include ‘NEX’ exact
					length confirmation and non-displacement of fixation tapes.
					This is <Text.Bold>only</Text.Bold> in this exact context in
					the absence of vomiting, retching, coughing and unexpected
					respiratory distress.
				</Paragraph>
			</>
		),
		buttons: [[<Control.Right />, "C"]],
	},
	{
		id: "C",
		title:
			"Previously inserted NG tubes need to be rechecked after breaks of use",
		body: <Paragraph>Is this a newly inserted NG tube?</Paragraph>,
		buttons: [
			[<Control.Text>Yes</Control.Text>, "E"],
			[<Control.Text>No</Control.Text>, "D"],
		],
		textControl: true,
	},
	{
		id: "D",
		title: "Check for signs of NG tube displacement",
		body: (
			<>
				<Paragraph>
					Check for signs of NG tube displacement since insertion and
					measure the NG tube length to match with previously
					documented length.
				</Paragraph>
				<Paragraph>
					Are you satisfied with the position of the NG tube for
					aspiration?
				</Paragraph>
			</>
		),
		buttons: [
			[<Control.Text>Yes</Control.Text>, "E"],
			[<Control.Text>No</Control.Text>, "M"],
		],
		textControl: true,
	},
	{
		id: "E",
		body: (
			<Paragraph>
				Can you gently aspirate 0.5-1ml of fluid using a 50ml syringe?
			</Paragraph>
		),
		buttons: [
			[<Control.Text>Yes</Control.Text>, "F"],
			[<Control.Text>No</Control.Text>, "G"],
		],
		textControl: true,
	},
	{
		id: "F",
		title: "Test aspirate on pH strip",
		body: (
			<>
				<Paragraph>
					If 0.5-1ml of aspirate has been gained, test on pH strip.
				</Paragraph>
				<Paragraph>
					<Text.Bold>Do not</Text.Bold> use blue litmus paper.
				</Paragraph>
				<Paragraph style={{ marginBottom: theme.gutter }}>
					What is the pH?
				</Paragraph>

				<Panel
					icon={
						<Icon
							source={require(`../../../../public/assets/eye.svg`)}
							height={30}
						/>
					}
					link={`https://www.xrite.com/hue-test`}
					external={true}
				>
					Visual Colour Test
				</Panel>
			</>
		),
		buttons: [
			[<Control.Text>≤ pH 5.5</Control.Text>, "J"],
			[<Control.Text>> pH 5.5</Control.Text>, "K"],
		],
		textControl: true,
	},
	{
		id: "G",
		title: "Unable to aspirate",
		body: (
			<>
				<BottomRule>
					<Paragraph>
						If unable to aspirate, try the following steps...
					</Paragraph>
				</BottomRule>
				<Steps
					isStatic
					steps={[
						{
							title:
								"If possible turn patient to left side and re-try",
						},
						{
							title: (
								<React.Fragment>
									Inject 10-20ml of <Text.Bold>air</Text.Bold>{" "}
									into the tube using a syringe, wait 15-30min
									and re-try aspriation
								</React.Fragment>
							),
						},
						{
							title:
								"Advance NG tube by 10-20cm and re-try the above manoeuvres",
						},
						{
							title:
								"Apply mouth care in patients who are nil by mouth, as this stimulates gastric acid secretion",
						},
					]}
				/>
				<Paragraph>
					Have the attempts at aspiration been successful in gaining
					0.5-1ml of aspirate?
				</Paragraph>
			</>
		),
		buttons: [
			[<Control.Text>Yes</Control.Text>, "F"],
			[<Control.Text>No</Control.Text>, "H"],
		],
		textControl: true,
	},
	{
		id: "H",
		title: "Still unable to gain aspirate",
		body: (
			<>
				<Paragraph>If still unable to gain aspirate...</Paragraph>
				<Steps
					isStatic
					steps={[
						{ title: "Seek senior help" },
						{
							title:
								"Consider checking position with an x-ray or replacement of tube or repeat attempts at aspiration",
						},
					]}
				/>
			</>
		),
	},
	{
		id: "J",
		title: "pH is 5.5 or below",
		body: (
			<Paragraph>
				If pH is 5.5 or below, the NG tube can be used for feeding,
				hydration and administration of medications. Document the pH in
				the locally agreed 'NG tube chart'
			</Paragraph>
		),
	},
	{
		id: "K",
		title: "pH is above 5.5",
		body: (
			<>
				<BottomRule>
					<Paragraph>If the pH is above 5.5...</Paragraph>
				</BottomRule>
				<Steps
					isStatic
					steps={[
						{ title: "Leave for one hour" },
						{ title: "Aspirate again" },
						{ title: "Re-check pH of aspirate" },
					]}
				/>
				<BottomRule>
					<Paragraph>What is the pH?</Paragraph>
				</BottomRule>
			</>
		),
		buttons: [
			[<Control.Text>≤ pH 5.5</Control.Text>, "J"],
			[<Control.Text>> pH 5.5</Control.Text>, "L"],
		],
		textControl: true,
	},
	{
		id: "L",
		title: "Aspirate remains above 5.5 pH",
		body: (
			<>
				<BottomRule>
					<Paragraph>
						If the aspirate remains above 5.5 pH with all the above
						manoeuvres...
					</Paragraph>
				</BottomRule>
				<Steps
					isStatic
					steps={[
						{
							title:
								"Seek senior help to consider checking position with an x-ray or replacement of tube or repeat attempts at aspiration",
						},
						{
							title:
								"Review patient medication for new gastric acid suppressing drugs",
						},
					]}
				/>
			</>
		),
	},
	{
		id: "M",
		title: "Unsatisfactory NG position",
		body: (
			<>
				<BottomRule>
					<Paragraph>
						If not satisfied with NG position for aspiration...
					</Paragraph>
				</BottomRule>
				<Steps
					isStatic
					steps={[
						{ title: "Seek senior help" },
						{
							title:
								"Consider checking position with an x-ray or replacement of tube or repeat attempts at aspiration",
						},
					]}
				/>
			</>
		),
	},
	// {
	// 	id: "N",
	// 	title: "Procedure complete",
	// 	body: <Paragraph>Return to reference menu</Paragraph>,
	// 	buttons: [[<Control.Right />, "/reference", true]],
	// },
];

export default questions;
