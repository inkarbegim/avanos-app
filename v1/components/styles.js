import * as React from "react";
import { withRouter } from "react-router-native";
import Chevron from "../public/assets/chevron-left.svg";

import styled from "styled-components/native";
import theme from "../theme";

export const Title = styled.Text`
	font-family: ${theme.font.family.normal};
	text-align: center;
	font-size: 24px;
	font-weight: bold;
	color: ${theme.color.black};
	margin: 5px 0;
`;

export const Paragraph = styled.Text`
	font-family: ${theme.font.family.normal};
	font-size: 18px;
	font-weight: normal;
	color: ${theme.color.black};
	margin: 0 0 5px;
`;

export const BottomRule = styled.View`
	${theme.border.light("bottom")}
	margin: 0 0 20px;
`;

export const Bold = styled(Paragraph)`
	font-family: ${theme.font.family.bold};
`;

const BackButton = styled.TouchableOpacity`
	width: 30px;
	height: 30px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const ScreenTitle = {
	Outer: styled.View`
		align-items: center;
		justify-content: center;
		display: flex;
		background-color: white;
		${theme.border.light("bottom")}
	`,
	Inner: styled.View`
		width: 100%;
		max-width: ${theme.maxWidth}px;
		flex-direction: row;
		display: flex;
		align-items: center;
		justify-content: flex-start;
	`,
	Text: styled.Text`
		padding: 0 ${theme.gutter}px;
		font-family: "Avanos Sans Bold";
		margin-top: 15px;
		font-size: 24px;
	`,
	Back: withRouter(({ history }) => (
		<BackButton onPress={() => history.goBack()}>
			<Chevron color="black" />
		</BackButton>
	)),
};
