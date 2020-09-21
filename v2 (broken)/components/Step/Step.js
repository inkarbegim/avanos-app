import * as React from "react";

import {
	Body,
	ImageWrapper,
	InlineImageWrapper,
	Inner,
	Outer,
	TextWrapper,
	Title,
} from "./styles";
import { TouchableWithoutFeedback, View } from "react-native";

import Chevron from "../../public/assets/chevron-right.svg";
import { useHistory } from "react-router-native";

export const Step = ({
	icon = false,
	title,
	desc,
	link,
	active,
	inline,
	onLayout,
}) => {
	const history = useHistory();

	const handlePress = () => {
		if (link && active) history.push(link);
	};

	return (
		<TouchableWithoutFeedback onPress={handlePress}>
			<Outer onLayout={onLayout} active={active}>
				{!!icon && !inline && (
					<ImageWrapper>
						{React.cloneElement(icon, {
							style: { height: 150, resizeMode: "contain" },
						})}
					</ImageWrapper>
				)}
				<Inner>
					{!!icon && !!inline && (
						<InlineImageWrapper>{icon}</InlineImageWrapper>
					)}
					<TextWrapper>
						{!!title && <Title>{title}</Title>}
						{!!desc && <Body>{desc}</Body>}
					</TextWrapper>
					{link && <Chevron color="black" />}
				</Inner>
			</Outer>
		</TouchableWithoutFeedback>
	);
};
