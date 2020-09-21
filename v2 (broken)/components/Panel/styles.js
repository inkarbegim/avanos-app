import { Animated } from "react-native";
import { Paragraph } from "../styles";
import styled from "styled-components/native";
import theme from "../../theme";

export const Outer = styled(Animated.View)`
	${theme.shadow};
	position: relative;
	margin-bottom: 15px;
	border-radius: ${theme.borderRadius}px;
	${({ attempted, correct }) =>
		attempted && (correct ? theme.border.success : theme.border.danger)};
`;

export const Background = styled.ImageBackground`
	border-radius: ${theme.borderRadius}px;
`;

export const TouchListener = styled.TouchableWithoutFeedback`
	border-radius: ${theme.borderRadius}px;
`;

export const Inner = styled.View`
	padding: 15px ${theme.gutter}px;
	display: flex;
	flex-direction: row;
	align-items: center;
`;

export const Body = styled(Paragraph)`
	margin: 0 15px 0px;
	flex: 1;
	color: ${({ active }) => (active ? theme.color.white : theme.color.black)};
`;

export const Footer = styled.View`
	${theme.border.light("top")};
	margin: 0 -${theme.gutter}px -${theme.gutter}px;
	padding: ${theme.gutter}px;
`;
