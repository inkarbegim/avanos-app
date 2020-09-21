import * as React from "react";
import { Wrapper, Text } from "./styles";

export const Badge = ({ children, variant, style, show }) => {
	return (
		<Wrapper style={style} variant={variant} show={show}>
			<Text>{children}</Text>
		</Wrapper>
	);
};
