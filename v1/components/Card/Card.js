import React from "react";
import {
	AlertBackground,
	AlertIcon,
	AlertTitle,
	Outer,
	Inner,
	Footer,
	Gradient,
	Image,
	Title,
} from "./styles";
import Chevron from "../../public/assets/chevron-right.svg";
import { Paragraph } from "../styles";

export const Card = ({
	title,
	body,
	footer,
	children,
	imageProps,
	alert,
	...props
}) => {
	return (
		<Outer {...props}>
			{alert ? (
				<AlertBackground>
					<Inner center>
						<AlertIcon />
						<AlertTitle>{title}</AlertTitle>
					</Inner>
				</AlertBackground>
			) : (
				<React.Fragment>
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
				</React.Fragment>
			)}
		</Outer>
	);
};
