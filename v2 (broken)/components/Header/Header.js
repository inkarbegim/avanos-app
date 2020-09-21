import { BackButton, Inner, Outer, Text } from "./styles";
import { useHistory, useLocation } from "react-router-native";

import Chevron from "../../public/assets/chevron-left.svg";
import React from "react";

export const Header = ({ children }) => {
	const backButton = useLocation().pathname.split("/").length > 2;
	const history = useHistory();

	return (
		<Outer>
			<Inner>
				{backButton && (
					<BackButton onPress={() => history.go(-1)}>
						<Chevron color="black" />
					</BackButton>
				)}
				<Text>{children}</Text>
			</Inner>
		</Outer>
	);
};
