const theme = {
	maxWidth: 450,
	gutter: 20,
	borderRadius: 3,
	shadow: `box-shadow: 0 0 3px #00000029`,
	color: {
		white: "#fefefe",
		grey: "#dfdfdf",
		black: "#090909",
		danger: "#ee4444",
	},
	font: {
		family: {
			normal: "Avanos Sans",
			bold: "Avanos Sans Bold",
		},
	},
	border: {
		danger: `border: 0.5px solid #ee4444`,
		light: (side) => {
			if (side) {
				return `
				border-${side}-width: 0.5px;
				border-${side}-color: #dfdfdf;
				`;
			} else {
				return `
				border-width: 0.5px;
				border-color: #dfdfdf;
				`;
			}
		},
	},
};

export default theme;
