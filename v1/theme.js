const theme = {
	maxWidth: 450,
	gutter: 20,
	borderRadius: 3,
	shadow: `
	border: 1px solid #efefef;
	shadow-color: #000;
	shadow-offset: {width: 5, height: 2};
	shadow-opacity: 0.05;
	shadow-radius: 5px;
	elevation: 1`,
	color: {
		white: "#fefefe",
		grey: "#efefef",
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
		danger: `border: 1px solid #ee4444`,
		light: (side) => {
			if (side) {
				return `
				border-${side}-width: 1px;
				border-${side}-color: #efefef
				`;
			} else {
				return `
				border-width: 1px;
				border-color: #efefef
				`;
			}
		},
	},
};

export default theme;
