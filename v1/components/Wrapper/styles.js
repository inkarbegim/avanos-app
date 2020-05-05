import styled from "styled-components/native";

export const Inner = styled.View`
	margin: 0 auto;
	max-width: ${({ theme }) => theme.maxWidth}px;
	width: 100%;
	padding: 0 ${({ theme }) => theme.gutter}px;
`;
