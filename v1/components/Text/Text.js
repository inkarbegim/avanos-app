import { Bold, Italic } from "./styles";

import { Text as RNText } from "react-native";
import React from "react";
import theme from "../../theme";

export const Text = {
	Bold,
	Italic,
	Asphirate: () => (
		<Bold>
			as<RNText style={{ color: theme.color.orange }}>pH</RNText>irate
		</Bold>
	),
};
