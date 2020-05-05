import * as React from "react";
import theme from "../../theme";
import { Inner } from "./styles";
import styled from "styled-components/native";

export const Outer = styled.ScrollView`
	flex: 1;
	position: relative;
`;

export const Scroll = React.forwardRef(
	({ outerProps, innerProps, children }, scrollWrapper) => {
		return (
			<Outer
				ref={scrollWrapper}
				{...outerProps}
				contentContainerStyle={{ paddingTop: theme.gutter }}
			>
				<Inner {...innerProps}>{children}</Inner>
			</Outer>
		);
	}
);
