import styled from "styled-components/native";
import { Paragraph } from "../styles";

export const TouchListener = styled.TouchableWithoutFeedback``;

export const Outer = styled.View`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	padding-bottom: ${({ theme }) => theme.gutter}px;
	margin-bottom: ${({ theme }) => theme.gutter}px;
	opacity: ${({ active }) => (active ? "1" : "0.25")};
	${({ theme }) => theme.border.light("bottom")}
`;

export const ImageWrapper = styled.View`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 40px;
`;

export const InlineImageWrapper = styled.View`
	margin-right: ${({ theme }) => theme.gutter}px;
	width: 65px;
	display: flex;
	align-items: center;
`;

export const Inner = styled.View`
	display: flex;
	flex-direction: row;
	align-items: center;
`;

export const TextWrapper = styled.View`
	flex: 1;
	align-self: flex-start;
`;

export const Title = styled(Paragraph)`
	font-family: ${({ theme }) => theme.font.family.bold};
	font-size: 18px;
`;
export const Body = styled(Paragraph)`
	font-size: 18px;
`;
