import styled from "styled-components/native";
import theme from "../../theme";
import { Paragraph } from "../styles";
import { LinearGradient } from "expo-linear-gradient";

const height = 410;
const footerHeight = 60;

export const Outer = styled.View`
	background-color: ${theme.color.white};
	border-radius: ${theme.borderRadius}px;
	${theme.shadow};
	${theme.border.light()};
	height: ${height}px;
	position: relative;
	display: flex;

	margin-bottom: ${theme.gutter}px;
`;

export const Inner = styled.View`
	padding: ${theme.gutter}px;
	overflow: hidden;
	flex: 1;

	display: flex;
`;

export const Gradient = styled(LinearGradient).attrs({
	colors: ["#ffffff00", "#fff"],
})`
	position: absolute;
	height: ${height - footerHeight}px;
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
		line-height 18px;
	`,
};
