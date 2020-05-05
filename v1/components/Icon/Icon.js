import * as React from "react";
import { Image } from "react-native";
import { iconWidth } from "../Control/styles";

export const Icon = ({ source, control, ...props }) => {
	if (typeof source === "object") {
		let inherit = {};
		if (control) {
			inherit.width = iconWidth;
			inherit.height = iconWidth;
		}

		return <source.default {...props} {...inherit} />;
	}

	return <Image source={source} {...props} />;
};
