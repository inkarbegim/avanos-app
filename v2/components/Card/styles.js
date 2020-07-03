import styled from "styled-components/native";
import theme from "../../theme";
import { Paragraph } from "../styles";
import { LinearGradient } from "expo-linear-gradient";

const defaultHeight = 410;
const footerHeight = 60;

export const AlertBackground = styled.ImageBackground.attrs({
	source: require("../../public/assets/card-gradient.png"),
})`
	width: 100%;
	height: 100%;
	border-radius: ${theme.borderRadius}px;
`;

export const AlertIcon = styled.Image.attrs({
	source: require("../../public/assets/alert-white.png"),
})`
	margin-bottom: ${theme.gutter * 3}px;
`;

export const AlertTitle = styled(Paragraph)`
	font-family: ${theme.font.family.bold};
	font-size: 24px;
	line-height: 30px;
	text-align: center;
	color: ${theme.color.white};
`;

export const Outer = styled.View`
	background-color: ${theme.color.white};
	border-radius: ${theme.borderRadius}px;
	${theme.shadow};
	${theme.border.light()};
	position: relative;
	display: flex;
	margin-bottom: ${theme.gutter}px;

	height: ${({ height }) => (height ? height : defaultHeight)}px;
`;

export const Inner = styled.View`
	padding: ${theme.gutter}px;
	overflow: hidden;
	flex: 1;
	display: flex;
	${({ center }) =>
		center &&
		`
		padding: 72px ${theme.gutter * 2}px;
		align-items: center;
	`}
`;

export const Gradient = styled(LinearGradient).attrs({
	colors: ["#ffffff00", "#fff"],
})`
	position: absolute;
	height: ${defaultHeight - footerHeight}px;
	top: 0;
	left: 0;
	width: 100%;
`;

export const Image = styled.Image`
	flex: 1;
	align-self: center;
`;

export const Title = styled(Paragraph)`
	${({ theme }) => `font-family: ${theme.font.family.bold}`}
`;

export const Footer = {
	Wrapper: styled.View`
		${theme.border.light("top")};
		border-top-width: 1px;
		display: flex;
		flex-direction: row;
		padding: 0 ${theme.gutter}px;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		height: ${footerHeight}px;
		background-color: ${theme.color.white};
	`,
	Text: styled(Paragraph)`
		font-family: ${theme.font.family.normal};
		font-size: 18px;
		margin-bottom: 0;
		line-height: 18px;
	`,
};
