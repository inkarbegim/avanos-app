import React from "react";
import { Outer, Inner, Footer, Gradient, Image, Title } from "./styles";
import Chevron from "../../public/assets/chevron-right.svg";
import { Paragraph } from "../styles";
import { ImageBackground } from "react-native";

export const Card = ({
	title,
	body,
	footer,
	children,
	imageProps,
	backgroundImage,
	...props
}) => {
	return (
		// <ImageBackground
		// 	source={backgroundImage || require("../../public/assets/white.png")}
		// >
		// The above breaks everything!
		<Outer {...props}>
			<Inner>
				{title && <Title>{title}</Title>}
				{body && <Paragraph>{body}</Paragraph>}
				{children}
				{imageProps && <Image {...imageProps} />}
			</Inner>
			{!!footer && (
				<React.Fragment>
					<Gradient />
					<Footer.Wrapper>
						<Footer.Text>{footer}</Footer.Text>
						<Chevron color="black" />
					</Footer.Wrapper>
				</React.Fragment>
			)}
		</Outer>
		// </ImageBackground>
	);
};
