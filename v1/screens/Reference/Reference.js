import React from "react";
import cards from "./data/cards";
import Card from "../../components/Card";
import Wrapper from "../../components/Wrapper";

export const Reference = () => {
	return (
		<Wrapper.Scroll>
			{cards.map(({ children, ...props }, index) => (
				<Card {...props} key={`reference-card-${index}`} height={173}>
					{children}
				</Card>
			))}
		</Wrapper.Scroll>
	);
};
