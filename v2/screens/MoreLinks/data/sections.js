const assetRoot = `../../../public/assets`;

export default [
	{
		title: `External`,
		links: [
			{
				title: `BAPEN`,
				link: `https://www.bapen.org.uk/`,
				icon: require(`${assetRoot}/logo/bapen.png`),
				png: true,
			},
			{
				title: `NNNG`,
				link: `https://www.nnng.org.uk/`,
				icon: require(`${assetRoot}/logo/nnng.png`),
				png: true,
			},
			{
				title: `BDA`,
				link: `https://www.bda.uk.com/`,
				icon: require(`${assetRoot}/logo/bda.png`),
				png: true,
			},
			{
				title: `NHSI`,
				link: `https://improvement.nhs.uk/`,
				icon: require(`${assetRoot}/logo/nhs.png`),
				png: true,
			},
			{
				title: `Visual Colour Test`,
				link: `https://www.xrite.com/hue-test`,
				icon: require(`${assetRoot}/eye.svg`),
			},
		],
	},
	{
		title: `Contact us`,
		links: [
			// {
			// 	title: `Telephone`,
			// 	// link: `tel:`,
			// 	icon: require(`${assetRoot}/tel.svg`),
			// },
			{
				title: `Email`,
				link: `mailto:avanos@avanos.com`,
				icon: require(`${assetRoot}/email.svg`),
			},
			{
				title: `Website`,
				link: `https://avanos.co.uk/`,
				icon: require(`${assetRoot}/website.svg`),
			},
		],
	},
	// {
	// 	title: `PDFs`,
	// 	links: [
	// 		{
	// 			title: `Decision Tree`,
	// 		},
	// 		{
	// 			title: `Decision Tree (online)`,
	// 		},
	// 	],
	// },
];
