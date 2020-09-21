import styled from "styled-components/native";
import theme from "../../theme";

export const Title = styled(DefaultTitle)`
	margin-top: 20px;
	margin-bottom: 20px;
	text-align: center;
`;

export const Paragraph = styled(DefaultParagraph)`
	margin-bottom: 50px;
	text-align: center;

	color: ${theme.color.danger};
`;

export const BackButtonWrapper = styled.TouchableOpacity`
	display: flex;
	flex-direction: row;
	align-items: center;
`;
