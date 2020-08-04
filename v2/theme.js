const theme = {
	maxWidth: 450,
	gutter: 20,
	borderRadius: 3,
	shadow: `
	border: 1px solid #efefef;
	shadow-color: #000;
	shadow-opacity: 0.05;
	shadow-radius: 10px;
	elevation: 1`,
	color: {
		white: "#fefefe",
		grey: "#efefef",
		black: "#090909",
		danger: "#ee4444",
		success: "#44aa44",
	},
	font: {
		family: {
			normal: "Avanos Sans",
			bold: "Avanos Sans Bold",
			italic: "Avanos Sans Italic",
		},
	},
	border: {
		danger: `border: 1px solid #ee4444`,
		success: `border: 1px solid #44aa44`,
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
