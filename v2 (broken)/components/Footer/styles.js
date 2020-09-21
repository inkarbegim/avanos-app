import styled from "styled-components/native";
import { Paragraph } from "../styles";
import { Animated, SafeAreaView } from "react-native";

export const Wrapper = styled(SafeAreaView)`
	position: relative;
	z-index: 1000;
	align-items: center;
	align-self: flex-end;
	display: flex;
	flex-direction: row;
	background-color: ${({ theme }) => theme.color.white};
	${({ theme }) => theme.border.light("top")}
`;

export const Tab = {
	Outer: styled.TouchableWithoutFeedback`
		flex: 1;
		display: flex;
		background-color: white;
	`,
	Inner: styled(Animated.View)`
		padding: 15px 0 0;

		display: flex;
		flex: 1;
		justify-content: center;
		align-items: center;
		${({ active }) => (active ? `opacity: 1` : `opacity: 0.5`)};
	`,
};

export const TitleWrapper = styled.View`
	height: 40px;
	display: flex;
	flex-direction: row;
	align-items: center;
	margin-top: 3px;
`;

export const Title = styled(Paragraph)`
	width: 0;
	flex-grow: 1;
	flex: 1;
	font-size: 12px;
	line-height: 12px;
	text-align: center;
`;
