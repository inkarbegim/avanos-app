import * as React from "react";
import { Wrapper, Gradient, Icon, Title } from "./styles";

export const Alert = ({ active, title, onLayout }) => {
	return (
		<Wrapper active={active} onLayout={onLayout}>
			<Gradient.Outer>
				<Gradient.Inner>
					<Icon />
					<Title style={{ textAlign: "center" }}>{title}</Title>
				</Gradient.Inner>
			</Gradient.Outer>
		</Wrapper>
	);
};
