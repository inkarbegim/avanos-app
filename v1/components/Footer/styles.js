import styled from "styled-components/native";
import { Paragraph } from "../styles";
import { Link } from "react-router-native";

export const Wrapper = styled.View`
	align-items: center;
	align-self: flex-end;
	display: flex;
	flex-direction: row;
	background-color: ${({ theme }) => theme.color.white};
	${({ theme }) => theme.border.light("top")}
`;

const hasNotch =
	Platform.OS == "ios" &&
	Expo.Constants.platform.ios.model.toLowerCase().includes("iphone x");

export const Tab = {
	Outer: styled.TouchableWithoutFeedback`
		flex: 1;
		${hasNotch && `padding-bottom: 20px;`}
	`,
	Link: styled(Link)`
		width: 25%;
	`,
	Inner: styled.View`
		padding: 15px 0;
		background-color: white;
		display: flex;
		justify-content: center;
		align-items: center;
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
