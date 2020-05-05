import styled from "styled-components/native";

export const Wrapper = styled.View`
	padding: 7px 20px 2px;
	border-radius: 40px;
	background-color: ${({ theme }) => theme.color.danger};
	display: flex;
	align-items: center;
	justify-content: center;
	margin-left: auto;
	margin-right: auto;

	${({ hidden }) => hidden && "display: none"}
`;

export const Text = styled.Text`
	color: ${({ theme }) => theme.color.white};
	text-transform: uppercase;
	font-size: 12px;
	line-height: 12px;
	font-family: ${({ theme }) => theme.font.family.normal};
`;
