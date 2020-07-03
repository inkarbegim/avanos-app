import * as React from "react";
import styled from "styled-components/native";
import theme from "../../theme";
import { Inner } from "./styles";

export const Outer = styled.View`
	padding-top: ${theme.gutter}px;
	padding-bottom: ${theme.gutter}px;
	flex: 1;
	position: relative;
	display: flex;
`;

export const Fixed = ({ children, outerProps, innerProps }) => (
	<Outer {...outerProps}>
		<Inner {...innerProps}>{children}</Inner>
	</Outer>
);
