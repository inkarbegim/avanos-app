import * as React from "react";
import { Wrapper, Text } from "./styles";

export const Badge = ({ children, style, hidden }) => {
	return (
		<Wrapper style={style} hidden={hidden}>
			<Text>{children}</Text>
		</Wrapper>
	);
};
