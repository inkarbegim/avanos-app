import React from "react";
import { Title, Paragraph, BackButtonWrapper } from "./styles";
import Wrapper from "../Wrapper";
import { useHistory } from "react-router-native";
import ChevronLeft from "../../public/assets/chevron-left.svg";
import { IconWrapper } from "../styles";

export const Error = ({ children }) => {
	const history = useHistory();

	return (
		<Wrapper.Scroll>
			<Title>Oops! There was an error</Title>
			<Paragraph>{children}</Paragraph>
			<BackButtonWrapper onPress={() => history.goBack()}>
				<IconWrapper>
					<ChevronLeft />
				</IconWrapper>
				<Paragraph>Back</Paragraph>
			</BackButtonWrapper>
		</Wrapper.Scroll>
	);
};
