import theme from "../../../theme";

const assetRoot = "../../../public/assets/assemble-equipment";

const equipment = [
	{
		title: "Trolley",
		desc: "Which has been cleaned as per hospital policy",
		icon: require(`${assetRoot}/trolley.svg`),
	},
	{
		title: "Apron and gloves",
		icon: require(`${assetRoot}/apron-and-gloves.svg`),
	},
	{
		title: "Sterile paper towel",
		icon: require(`${assetRoot}/paper-towel.svg`),
	},
	{
		title: "The required nasogastric tube",
		desc: "(CE marked) as per NPSA 2011 guidelines",
		icon: require(`${assetRoot}/ng-tube.svg`),
	},
	{
		title: "Sterile water",
		icon: require(`${assetRoot}/water.svg`),
	},
	{
		title: "Sterile reciever",
		desc: "(galipot)",
		icon: require(`${assetRoot}/galipot.svg`),
	},
	{
		title: "Enteral syringe",
		icon: require(`${assetRoot}/enteral-syringe.svg`),
	},
	{
		title: "Recepticle for aspirate",
		icon: require(`${assetRoot}/container-for-aspirate.svg`),
	},
	{
		title: "pH indicator strips/paper",
		desc: "(CE marked) as per NPSA (2011) guidelines e.g. aspHirate",
		icon: require(`${assetRoot}/ph-indicator-strips.svg`),
	},
	{
		title: "Suitable tape",
		desc: (
			<React.Fragment>
				For fixing tube to the nose/face or{" "}
				<Text style={{ fontFamily: theme.font.family.italic }}>
					CORGRIP*
				</Text>{" "}
				retention system
			</React.Fragment>
		),
		icon: require(`${assetRoot}/tape-for-nose.svg`),
	},
	{
		title: "Glass of water ",
		desc: "(+/- straw if allowed)",
		icon: require(`${assetRoot}/water-with-straw.svg`),
	},
	{
		title: "Vomit bowl",
		icon: require(`${assetRoot}/vomit-bowl.svg`),
	},
	{
		title: "Tissues",
		icon: require(`${assetRoot}/tissue.svg`),
	},
	{
		title: "Rubbish bag",
		desc: "Suitable for type of waste being generated",
		icon: require(`${assetRoot}/rubbish.svg`),
	},
];

export default equipment;
