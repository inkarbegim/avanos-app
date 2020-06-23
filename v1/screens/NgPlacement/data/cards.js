import React from "react";

import Step from "../../components/Step";
import equipment from "./data/equipment";

export default [
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
		body: "Wash hands and apply hand rub as per local guidelines",
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
		title: "Ensure patient is in a suitable position",
		body:
			"They should be in an upright position with head facing forward and well supported by pillows. ",
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
		alert: true,
		title:
			"The head should not be tilted back as this will aid opening of the airway",
	},
	{
		title: "Open paper towel onto trolley",
		body:
			"Open sterile paper towel onto trolley and then open the NG tube, syringe and galipot on to towel. Pour sterile water into the galipot and prepare a piece of pH paper",
		imageProps: {
			source: require("../../public/assets/paper-towel.png"),
			style: {
				width: 144,
				height: 160,
				resizeMode: "contain",
			},
		},
	},
	{
		title: "Put on non-sterile gloves",
		imageProps: {
			source: require("../../public/assets/gloves.png"),
			style: {
				width: 156,
				height: 160,
				resizeMode: "contain",
			},
		},
	},
	{
		title: "Secure the guide wire",
		body:
			"Secure the guide wire into the end of the tube after ensuring that it moves freely within the tube",
	},
	{
		title: "Ask the patient to clear their nose",
		body:
			"Ask the patient to clear their nose and then ask them to place a finger on each nostril alternately whilst sniffing to see which one can be sniffed through more easily",
	},
	{
		title: "Lubricate the end of the tube",
		body:
			"Lubricate the end of the tube as per manufacturer’s instructions (Using tap/sterile water against manufacturer’s instructions may interfere with the crucial pH measurements)",
	},
	{
		title: "Place the tube",
		body:
			"Place the tube into the preferred nostril and advance the tube along the floor of the nose to the naso-pharynx",
	},
	{
		title: "Ask the patient to swallow",
		body:
			"Once at the naso-pharynx ask the patient to swallow with head slightly tilted forward – (at this stage offer the patient a drink if it is safe to do so) – as the patient swallows advance the tube gently and slowly until the pre determined measurement is reached.",
	},
	{
		alert: true,
		title: `Never force the tube. 
If any resistance is felt, withdraw the tube and 
re advance`,
	},
	{
		title: "Hold the tube at the predetermined length",
		body:
			"Hold the tube at the predetermined length and remove the guide wire slowly",
	},
	{
		title: "Unable to withdraw guide wire",
		body:
			"If you are unable to withdraw the guide wire, the tube may be coiled. If so pull back the NG tube whilst gently pulling on the guide wire until it moves",
	},
	{
		title: "Repass the tube and retry guide wire removal",
	},
	{
		alert: true,
		title:
			"Check the position of the tube using the pH and/or CxR algorithm of this App, which is based on NPSA (2011) guidelines",
	},
	{
		alert: true,
		title:
			"NEVER use a tube that has not been positively and correctly checked",
	},
	{
		title: "Secure the tube",
		body:
			"When the tube is confirmed as being in the correct place, secure to the side of the patients face using an appropriate tape",
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
			"Ensure locally agreed ‘NG tube chart’ is available for further checks ",
		].map((title, key) => (
			<Step key={`document-${key}`} active inline title={title} />
		)),
		footer: "See full notes",
	},
];
