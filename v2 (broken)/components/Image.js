import * as React from "react";

import { Image as RNImage } from "react-native";

const Image = ({ width, ...props }) => {
	const [height, setHeight] = React.useState();

	const handleLayout = ({ nativeEvent }) => {
		const { width, height } = nativeEvent.layout;

		const ar = width / height;

		console.log("ar", ar);

		setHeight(width / ar);
	};

	return (
		<RNImage
			width={height && width}
			height={height}
			onLayout={handleLayout}
			{...props}
		/>
	);
};

export default Image;
