import { Dimensions, Image as RNImage } from "react-native";

import { Paragraph } from "../styles";
import styled from "styled-components/native";
import theme from "../../theme";

export const Title = styled(Paragraph)`
	font-family: ${({ theme }) => theme.font.family.bold};
	font-size: 24px;
	line-height: 27px;
	text-align: center;
`;

export const Image = styled(RNImage)`
	width: ${Dimensions.get("window").width - theme.gutter * 2}px;
	height: ${Dimensions.get("window").height / 2.5}px;
	margin-bottom: ${theme.gutter}px;
`;
