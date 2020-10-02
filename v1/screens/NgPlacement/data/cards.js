import Icon from "../../../components/Icon";
import { Paragraph } from "../../../components/styles";
import React from "react";
import Step from "../../../components/Step";
import { Text } from "react-native";
import equipment from "./equipment";
import theme from "../../../theme";

const assetRoot = "../../../public/assets/ng-placement";

export default [
     {
    		title: "Inkar's Card",
    		children: (
    			<Paragraph>
    				<Text
    					style={{
    						fontFamily: theme.font.family.bold,
    					}}
    				>
    					 Task 1 with RoundTableStudio
    				</Text>{" "}
    				– (at this stage offer the patient a drink if it is safe to do
    				so) – as the patient swallows advance the tube gently and slowly
    				until the predetermined measurement is reached
    			</Paragraph>
    		),
    		imageProps: {
    			source: require(`${assetRoot}/swallow.png`),
    			style: {
    				width: 175,
    				height: 175,
    				resizeMode: "contain",
    			},
    		},
    	},
	{
		title: "NG Placement",
		children: (
			<React.Fragment>
				<Paragraph>
					Nasogastric placement is classed as a ‘clean’ procedure and
					the wearing of non-sterile gloves is required and principles
					of non-touch technique should be adhered to.
				</Paragraph>
				<Paragraph>
					If the patient shows any signs of respiratory distress
					throughout any part of the passage of the tube it must be
					removed immediately.
				</Paragraph>
			</React.Fragment>
		),
		imageProps: {
			source: require(`${assetRoot}/place-tube.png`),
			style: {
				width: 175,
				height: 175,
				resizeMode: "contain",
			},
		},
	},
	{
		title: "Equipment required",
		children: equipment.map(({ title, desc, icon }, key) => {
			return (
				<Step
					key={`equipment-${key}`}
					active
					inline
					title={title}
					desc={desc}
					icon={<Icon source={icon} color="black" height={45} />}
				/>
			);
		}),
		link: "/ngPlacement/assembleEquipment",
		footer: "See full equipment list",
	},
	{
		title: "Wash hands",
		body: "Wash hands and apply hand rub as per local guidelines",
		imageProps: {
			source: require(`${assetRoot}/wash-hands.png`),
			style: {
				width: 178,
				height: 178,
				resizeMode: "contain",
			},
		},
	},
	{
		title: "Assemble equipment",
		imageProps: {
			source: require(`${assetRoot}/assemble-equipment.png`),
			style: {
				width: 200,
				height: 200,
				resizeMode: "contain",
			},
		},
	},
	{
		title: "Ensure patient is in a suitable position",
		body:
			"The patient should be in an upright position with head facing forward and well supported by pillows. ",
		imageProps: {
			source: require(`${assetRoot}/suitable-position.png`),
			style: {
				width: 210,
				height: 204,
				resizeMode: "contain",
			},
		},
	},
	{
		alert: true,
		title:
			"The head should not be tilted back as this will aid opening of the airway",
	},
	{
		title: "Open paper towel onto trolley",
		body:
			"Open sterile paper towel onto trolley and then open the NG tube, syringe and galipot on to towel. Pour sterile water into the galipot and prepare a piece of pH paper",
		imageProps: {
			source: require(`${assetRoot}/paper-towel.png`),
			style: {
				width: 178,
				height: 178,
				resizeMode: "contain",
			},
		},
	},
	{
		title: "Put on non-sterile gloves",
		imageProps: {
			source: require(`${assetRoot}/gloves.png`),
			style: {
				width: 177,
				height: 177,
				resizeMode: "contain",
			},
		},
	},
	{
		title: "Secure the stylet",
		body:
			"Secure the stylet into the end of the tube after ensuring that it moves freely within the tube",
		imageProps: {
			source: require(`${assetRoot}/secure-guide-wire.png`),
			style: {
				width: 175,
				height: 130,
				resizeMode: "contain",
			},
		},
	},
	{
		title: "Measure tube",
		body:
			"Measure amount of tube needed to pass by measuring the Nose to Ear to Xiphoid (‘NEX’) distance (see diagram)",
		imageProps: {
			source: require(`${assetRoot}/measure-amount.png`),
			style: {
				width: 175,
				height: 175,
				resizeMode: "contain",
			},
		},
	},
	{
		title: "Ask the patient to clear their nose",
		body:
			"Ask the patient to clear their nose and then ask him to place a finger on each nostril alternately whilst sniffing to see which one can be sniffed through more easily. If patient unable to cooperate, try one nostril and if unable to pass, alternate.",
		imageProps: {
			source: require(`${assetRoot}/clear-nose.png`),
			style: {
				width: 175,
				height: 175,
				resizeMode: "contain",
			},
		},
	},
	{
		title: "Lubricate the end of the tube",
		body:
			"Lubricate the end of the tube as per manufacturer’s instructions",
		imageProps: {
			source: require(`${assetRoot}/lubricate-tube.png`),
			style: {
				width: 175,
				height: 175,
				resizeMode: "contain",
			},
		},
	},
	{
		title: "Place the tube",
		body:
			"Place the tube into the preferred nostril and advance the tube along the floor of the nose to the naso-pharynx",
		imageProps: {
			source: require(`${assetRoot}/place-tube.png`),
			style: {
				width: 150,
				height: 150,
				resizeMode: "contain",
			},
		},
	},
	{
		title: "Ask the patient to swallow",
		children: (
			<Paragraph>
				Once at the naso-pharynx ask the patient to swallow{" "}
				<Text
					style={{
						fontFamily: theme.font.family.bold,
					}}
				>
					with head slightly tilted forward
				</Text>{" "}
				– (at this stage offer the patient a drink if it is safe to do
				so) – as the patient swallows advance the tube gently and slowly
				until the predetermined measurement is reached
			</Paragraph>
		),
		imageProps: {
			source: require(`${assetRoot}/swallow.png`),
			style: {
				width: 175,
				height: 175,
				resizeMode: "contain",
			},
		},
	},
	{
		alert: true,
		title: `Never force the tube.
If any resistance is felt, withdraw the tube and
readvance`,
	},
	{
		title: "Hold the tube at the predetermined length",
		body:
			"Hold the tube at the predetermined length and remove the stylet slowly",
		imageProps: {
			source: require(`${assetRoot}/measure-length.png`),
			style: { resizeMode: "contain", width: 175, height: 177 },
		},
	},
	{
		title: "Unable to withdraw stylet",
		body:
			"If you are unable to withdraw the stylet, the tube may be coiled. If so pull back the NG tube whilst gently pulling on the stylet until it moves",
		imageProps: {
			source: require(`${assetRoot}/unable-to-withdraw.png`),
			style: { resizeMode: "contain", width: 200, height: 179 },
		},
	},
	// {
	// 	title: "Repass the tube and retry stylet removal",
	// 	imageProps: {
	// 		source: require(`${assetRoot}/repass-tube.png`),
	// 		style: { resizeMode: "contain", width: 232, height: 260 },
	// 	},
	// },
	{
		alert: true,
		title:
			"Check the position of the tube using the pH and/or CxR algorithm of this App, which is based on NPSA (2011) guidelines",
		link: "/reference",
		footer: "Go to confirmation",
		fade: false,
	},
	{
		alert: true,
		title:
			"Never use a tube that has not been positively and correctly checked",
	},
	{
		title: "Secure the tube",
		children: (
			<Paragraph>
				When the tube is confirmed as being in the correct place, secure{" "}
				<Text style={{ fontFamily: theme.font.family.bold }}>
					to the side
				</Text>{" "}
				of the patient's face using an appropriate tape or{" "}
				<Text style={{ fontFamily: theme.font.family.italic }}>
					CORGRIP* retention system
				</Text>
			</Paragraph>
		),
		imageProps: {
			source: require(`${assetRoot}/nose-tape.png`),
			style: { resizeMode: "contain", width: 175, height: 155 },
		},
	},
	{
		title: "Document in the patient's notes",
		body:
			"Document in the patient's notes that the procedure has taken place to include:",
		children: [
			"Name and position of person who inserted NG",
			"How far the tube has been placed",
			"Confirmation of tube placement (pH result obtained) or CxR findings",
			"Any actions required",
			"Ensure locally agreed ‘NG tube chart’ is available for further checks",
		].map((title, key) => (
			<Step key={`document-${key}`} active inline title={title} />
		)),
		link: "/ngPlacement/documentationSteps",
		footer: "See full notes",
	},
	{
		title:
			"Use the interactive algorithm to confirm the correct placement at bedside (pH check)",
		link: "/reference/bedsidePlacement",
		footer: "Go to the pH check",
		imageProps: {
			source: require(`${assetRoot}/ph-check.png`),
			style: { width: 175, height: 175, resizeMode: "contain" },
		},
		fade: false,
	},
	{
		title: "Example of good documentation",
		link: "/ngPlacement/exampleDoc",
		imageProps: {
			source: require(`${assetRoot}/example-doc.png`),
			style: {
				width: 250,
				height: 250,
				resizeMode: "contain",
			},
		},
		footer: "See example",
	},
];
