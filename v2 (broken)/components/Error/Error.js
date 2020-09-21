import { BackButtonWrapper, Paragraph, Title } from "./styles";

import Chevron from "../../public/assets/chevron-left.svg";
import { IconWrapper } from "../styles";
import React from "react";
import Wrapper from "../Wrapper";
import { useHistory } from "react-router-native";

export const Error = ({ children }) => {
	const history = useHistory();

	return (
		// <Wrapper.Scroll>
		// 	<Title>Oops! There was an error</Title>
		// 	<Paragraph>{children}</Paragraph>
		// 	{/* <BackButtonWrapper onPress={() => history.goBack()}>
		// 		<IconWrapper>
		// 			<Chevron />
		// 		</IconWrapper>
		// 		<Paragraph>Back</Paragraph>
		// 	</BackButtonWrapper> */}
		// </Wrapper.Scroll>
		<Paragraph>{children}</Paragraph>
	);
};
