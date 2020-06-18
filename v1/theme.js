const theme = {
	maxWidth: 450,
	gutter: 20,
	borderRadius: 3,
	shadow: `shadow-color: #000;
	shadow-offset: {width: 5, height: 5};
	shadow-opacity: 0.05;
	shadow-radius: 5px;
	elevation: 1`,
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
				border-${side}-color: #dfdfdf
				`;
			} else {
				return `
				border-width: 0.5px;
				border-color: #dfdfdf
				`;
			}
		},
	},
};

export default theme;
