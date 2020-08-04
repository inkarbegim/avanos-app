import styled from "styled-components/native";
import theme from "../../theme";

export const iconWidth = 62;
const defaultWrapperWidth = 200;

export const Wrapper = styled.View`
	display: flex;
	justify-content: space-around;

	width: ${defaultWrapperWidth + theme.gutter * 2}px;
	padding: 0 ${theme.gutter}px;
	margin-top: ${theme.gutter}px;
	margin-bottom: ${theme.gutter}px;

	${({ textControl }) => `
		${
			!textControl &&
			`margin-left: auto; margin-right: auto; height: ${
				iconWidth + theme.gutter
			}px`
		};
		flex-direction: ${textControl ? "column" : "row"};
		width: ${textControl ? "100%" : `${defaultWrapperWidth}px`};
	`}
`;

export const IconWrapper = styled.TouchableOpacity`
	width: ${iconWidth}px;
	height: ${iconWidth}px;
	background-color: ${theme.color.white};
	border-radius: ${iconWidth}px;
	${theme.shadow};
	${({ disabled }) => disabled && `opacity: 0.25`};
`;
