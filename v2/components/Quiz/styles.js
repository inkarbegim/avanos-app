import styled from "styled-components/native";
import { Paragraph } from "../styles";

export const Title = styled(Paragraph)`
	font-family: ${({ theme }) => theme.font.family.bold};
	font-size: 24px;
	line-height: 27px;
	text-align: center;
`;
