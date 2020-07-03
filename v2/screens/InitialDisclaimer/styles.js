import styled from "styled-components/native";
import { Paragraph as DefaultParagraph } from "../../components/styles";
import { TouchableOpacity } from "react-native";
import theme from "../../theme";

export const Paragraph = styled(DefaultParagraph)`
	font-size: 22px;
	line-height: 27px;
	text-align: center;
	margin-top: 25px;
	margin-bottom: 35px;
`;

export const ButtonWrapper = styled.View`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;

export const Button = styled(TouchableOpacity)`
	border-radius: 5px;
	background-color: ${({ variant }) => theme.color[variant]};
	${theme.shadow};

	width: 47%;
	display: flex;
	height: 32px;
	align-items: center;
	justify-content: center;
`;

export const ButtonText = styled(DefaultParagraph)`
	font-size: 12px;
	margin-bottom: 0;
	color: ${theme.color.white};
	font-family: ${theme.font.family.bold};
	text-transform: uppercase;
`;
