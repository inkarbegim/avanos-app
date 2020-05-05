import styled from "styled-components/native";
import { Paragraph } from "../styles";

export const Outer = styled.View`
	min-height: 62px;
	${({ theme }) => theme.shadow};
	position: relative;
	display: flex;
	margin-bottom: 15px;
	border-radius: ${({ theme }) => theme.borderRadius}px;
	${({ wrong, theme }) => wrong && theme.border.danger}
`;

export const Background = styled.ImageBackground`
	overflow: hidden;
	border-radius: ${({ theme }) => theme.borderRadius}px;
	flex: 1;
`;

export const TouchListener = styled.TouchableWithoutFeedback`
	overflow: hidden;
	border-radius: ${({ theme }) => theme.borderRadius}px;
`;

export const Inner = styled.View`
	flex: 1;
	display: flex;
	align-items: center;
	padding: 15px ${({ theme }) => theme.gutter}px;
	flex-direction: row;
`;

export const Body = styled(Paragraph)`
	flex: 1;
	margin: 0 15px -8px;
	color: ${({ active, theme }) =>
		active ? theme.color.white : theme.color.black};
`;
