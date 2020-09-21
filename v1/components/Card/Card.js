import {
	AlertBackground,
	AlertIcon,
	AlertTitle,
	Footer,
	Gradient,
	Image,
	Inner,
	Outer,
	Title,
} from "./styles";

import Chevron from "../../public/assets/chevron-right.svg";
import { ImageBackground } from "react-native";
import { Paragraph } from "../styles";
import React from "react";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { useHistory } from "react-router-native";

export const Card = ({
	title,
	body,
	footer,
	children,
	imageProps,
	customBackgroundImage = require("../../public/assets/white.png"),
	alert,
	height,
	link,
	fade = true,
	...props
}) => {
	const history = useHistory();

	const handlePress = () => link && history.push(link);

	return (
		<TouchableWithoutFeedback onPress={handlePress}>
			<Outer {...props} height={height}>
				{alert ? (
					<AlertBackground>
						<Inner center>
							<AlertIcon />
							<AlertTitle>{title}</AlertTitle>
						</Inner>
						{!!footer && (
							<React.Fragment>
								{fade && <Gradient />}
								<Footer.Wrapper>
									<Footer.Text>{footer}</Footer.Text>
									<Chevron color="black" />
								</Footer.Wrapper>
							</React.Fragment>
						)}
					</AlertBackground>
				) : (
					<ImageBackground
						source={customBackgroundImage}
						style={{
							width: "100%",
							height: "100%",
							resizeMode: "contain",
						}}
					>
						<Inner>
							{title && <Title>{title}</Title>}
							{body && <Paragraph>{body}</Paragraph>}
							{children}
							{imageProps && <Image {...imageProps} />}
						</Inner>
						{!!footer && (
							<React.Fragment>
								{fade && <Gradient />}
								<Footer.Wrapper>
									<Footer.Text>{footer}</Footer.Text>
									<Chevron color="black" />
								</Footer.Wrapper>
							</React.Fragment>
						)}
					</ImageBackground>
				)}
			</Outer>
		</TouchableWithoutFeedback>
	);
};
