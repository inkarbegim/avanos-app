import styled from "styled-components/native";

import { ScreenTitle } from "../styles";

const hasNotch =
	Platform.OS == "ios" &&
	Expo.Constants.platform.ios.model.toLowerCase().includes("iphone x");

export const LogoWrapper = styled(ScreenTitle.Outer)`
	margin-top: ${hasNotch ? 40 : 10}px;
	padding-top: ${({ theme }) => theme.gutter}px;
	padding-bottom: 10px;
`;

export const Padding = styled.View`
	height: ${hasNotch ? 40 : 10}px;
`;
