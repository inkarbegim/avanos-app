import styled from "styled-components/native";
import theme from "../theme";

export const Paragraph = styled.Text`
	font-family: ${theme.font.family.normal};
	font-size: 18px;
	line-height: 22px;
	font-weight: normal;
	color: ${theme.color.black};
	margin: 0 0 5px;
`;

export const Title = styled(Paragraph)`
	font-family: ${theme.font.family.bold};
	text-align: center;
	font-size: 24px;
	line-height: 28px;
	color: ${theme.color.black};
	margin: 5px 0;
`;

export const BottomRule = styled.View`
	${theme.border.light("bottom")}
	margin: 0 0 20px;
`;

export const Bold = styled(Paragraph)`
	font-family: ${theme.font.family.bold};
`;
