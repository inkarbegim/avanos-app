import React from "react";
import { Outer, Inner, Text, BackButton } from "./styles";
import Chevron from "../../public/assets/chevron-left.svg";

export const Header = ({ children, back }) => {
	return (
		<Outer>
			<Inner>
				{back && (
					<BackButton>
						<Chevron color="black" />
					</BackButton>
				)}
				<Text>{children}</Text>
			</Inner>
		</Outer>
	);
};
