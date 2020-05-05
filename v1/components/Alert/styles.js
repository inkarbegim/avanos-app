import * as React from "react";

import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "react-native";
import { Paragraph } from "../styles";

export const Wrapper = styled.View`
	padding-bottom: ${({ theme }) => theme.gutter * 2}px;
	margin-bottom: ${({ theme }) => theme.gutter}px;
	opacity: ${({ active }) => (active ? 1 : 0.25)};
	${({ theme }) => theme.border.light("bottom")};
`;

export const Gradient = {
	Outer: styled(LinearGradient).attrs({ colors: ["#FF9E1B", "#FB637E"] })`
		border-radius: 40px;
		padding: 2px;
	`,
	Inner: styled.View`
		border-radius: 38px;
		background-color: ${({ theme }) => theme.color.white};
		padding: 15px;
		align-items: center;
		justify-content: center;
	`,
};

export const Icon = () => (
	<Image
		source={require("../../public/assets/alert.png")}
		style={{ resizeMode: "contain", width: 25 }}
	/>
);

export const Title = styled(Paragraph)`
	font-family: ${({ theme }) => theme.font.family.bold};
	font-size: 18px;
`;
