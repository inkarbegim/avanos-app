import * as React from "react";

import { IconWrapper, Wrapper, iconWidth } from "./styles";

import { Choice } from "../Panel";
import Icon from "../Icon";

const assetRoot = "../../public/assets";

export const Control = {
	Wrapper: ({ children, ...props }) => (
		<Wrapper {...props}>{children}</Wrapper>
	),
	Up: ({ onPress, disabled, ...props }) => (
		<IconWrapper onPress={onPress} disabled={disabled}>
			<Icon
				source={require(`${assetRoot}/arrow-up.svg`)}
				{...props}
				color="black"
				control
			/>
		</IconWrapper>
	),
	Down: ({ onPress, disabled, ...props }) => (
		<IconWrapper onPress={onPress} disabled={disabled}>
			<Icon
				source={require(`${assetRoot}/arrow-down.svg`)}
				{...props}
				color="black"
				control
			/>
		</IconWrapper>
	),

	Right: ({ onPress, disabled, ...props }) => (
		<IconWrapper onPress={onPress} disabled={disabled}>
			<Icon
				source={require(`${assetRoot}/arrow-right.svg`)}
				{...props}
				color="black"
				control
			/>
		</IconWrapper>
	),

	Correct: ({ onPress, disabled, ...props }) => (
		<IconWrapper onPress={onPress} disabled={disabled}>
			<Icon
				source={require(`${assetRoot}/correct.svg`)}
				{...props}
				control
			/>
		</IconWrapper>
	),
	Incorrect: ({ onPress, disabled, ...props }) => (
		<IconWrapper onPress={onPress} disabled={disabled}>
			<Icon
				source={require(`${assetRoot}/incorrect.svg`)}
				{...props}
				control
			/>
		</IconWrapper>
	),

	Text: ({ onPress, children, ...props }) => (
		<Choice selected onPress={onPress} {...props}>
			{/* For some reason all the panels become 
			one-liners if you don't repaint with the badge, 
			hence the random key */}
			{children}
		</Choice>

		// <Button onPress={onPress} title={children} {...props} />
	),
};
