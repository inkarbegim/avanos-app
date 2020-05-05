import styled from "styled-components/native";
import { Dimensions } from "react-native";

export const iconWidth = 62;

export const Wrapper = styled.View`
	height: ${iconWidth}px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;

	${({ inline, width }) => `
	width: ${width}px;
	${
		inline
			? `margin: 10px auto;`
			: ` position: absolute;
				top: ${Dimensions.get("screen").height - 20 - iconWidth * 2}px;
				left: ${Dimensions.get("screen").width / 2 - width / 2}px;`
	}`}
`;

export const IconWrapper = styled.TouchableOpacity`
	width: ${iconWidth}px;
	height: ${iconWidth}px;
	${({ theme }) => theme.shadow};
	${({ disabled }) => disabled && `opacity: 0.25`};
`;
