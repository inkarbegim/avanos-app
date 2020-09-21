import React from "react";

import Wrapper from "../../components/Wrapper";
import Card from "../../components/Card";
import cards from "./data/cards";

export const NgPlacement = () => {
	return (
		<Wrapper.Scroll>
			{cards.map(({ children, ...props }, index) => (
				<Card key={`ngplacement-card-${index}`} {...props}>
					{children}
				</Card>
			))}
		</Wrapper.Scroll>
	);
};
