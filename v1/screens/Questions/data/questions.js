const questions = [
	// {
	// 	title:
	// 		"Why are the stylet ports on the Corflo tubes different colours?",
	// 	buttons: [
	// 		["To allow easier flushing", false],
	// 		["To identify the length of the tube", true],
	// 		["To identify the french size of the tube", false],
	// 		["The colour has no purpose", false],
	// 	],
	// },
	// {
	// 	title: "What does 'Single Patient Use' mean?",
	// 	buttons: [
	// 		["The tube can be re-passed on the same patient", true],
	// 		["The tube can be used only once on the patient", false],
	// 		["The tube can be passed twice on the same patient", false],
	// 	],
	// },
	{
		title:
			"What is the NPSA recommendation for first line confirmation of Nasogastric Tube placement?",
		buttons: [
			[
				"Introduce air via a 50ml syringe and listen for sounds in the stomach",
				false,
			],
			[
				"Using a 50ml syringe aspirate stomach contents and confirm using pH Indicator strips ",
				true,
			],
			["X-Ray must be used to confirm placement", false],
		],
	},
	{
		title:
			"What is the accepted range of aspirate to confirm Nasogastric tube placement?",
		buttons: [
			["pH 1 - 5.5", true],
			["pH 3 - 6", false],
			["pH > 6", false],
		],
	},
	{
		title:
			"What action should you take if you are unable to gain aspirate or the aspirate is not in the correct pH range?",
		buttons: [
			[
				"Flush with 20ml sterile water and observe for signs of patient discomfort",
				false,
			],
			["Remove the tube and replace with a new one", false],
			["X-Ray must be used to confirm placement before use", true],
			[
				"Use a wire to clear any blockages which may be in the tube",
				false,
			],
		],
	},
	{
		title: "What should you do before administering feeds or medications?",
		buttons: [
			["Ask the patient if the tube has moved", false],
			["Clean the exit port with sterile wipes", false],
			["Confirm placement as per NPSA guidance", true],
		],
	},
	{
		title:
			"After confirming tube position, where should the pH reading be recorded?",
		buttons: [
			["In the patient's medical notes", false],
			["On the patient's feeding regimen chart", false],
			[
				"On the patient's feeding regimen chart and in the patients nursing notes",
				true,
			],
		],
	},
	{
		title:
			"It is the responsibility of the radiographer to ensure the chest radiograph is of sufficient quality to allow assessment of NG tube position by the clinician?",
		buttons: [
			["True", true],
			["False", false],
		],
	},
	{
		title:
			"When assessing a chest radiograph for NG tube position, the tip of the tube should be observed to...",
		buttons: [
			["Be above the diaphragm", false],
			[
				"Deviate to the left at the level of the tracheal bisection",
				false,
			],
			["Bisect the Carina", true],
			["Deviate to the left below the diaphragm", false],
		],
	},
	{
		title:
			"If the patient is on an acid suppression medication, such as a proton pump inhibitor, a higher pH is acceptable to confirm initial NG tube position in the stomach?",
		buttons: [
			["True", false],
			["False", true],
		],
	},
];

export default questions;
