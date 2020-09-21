import styled from "styled-components/native";
import theme from "../../theme";
import { SafeAreaView } from "react-native";

export const Outer = styled(SafeAreaView)`
	align-items: center;
	justify-content: center;
	display: flex;
	background-color: white;
	${theme.border.light("bottom")}
`;
export const Inner = styled.View`
	width: 100%;
	max-width: ${theme.maxWidth}px;
	flex-direction: row;
	display: flex;
	align-items: center;
	justify-content: flex-start;
`;
export const Text = styled.Text`
	padding: 0 ${theme.gutter}px;
	font-family: "Avanos Sans Bold";
	margin: 15px auto 7.5px;
	font-size: 24px;
	text-align: center;
`;
export const BackButton = styled.TouchableOpacity`
	margin-right: -30px;
	margin-top: 5px;
	width: 30px;
	height: 30px;
	display: flex;
	align-items: center;
	justify-content: center;
`;
