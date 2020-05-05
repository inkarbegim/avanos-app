import * as React from "react";
import Icon from "../Icon";
import { iconWidth, Wrapper, IconWrapper } from "./styles";
import { Button } from "react-native";

const assetRoot = "../../public/assets";

const calculateWrapperWidth = (children) => {
	if (children.hasOwnProperty("length")) {
		const { length } = children;
		const margin = ((length - 1) * iconWidth) / 1.5;
		return length * iconWidth + margin;
	} else {
		return iconWidth;
	}
};

export const Control = {
	Wrapper: ({ children, inline }) => (
		<Wrapper inline={inline} width={calculateWrapperWidth(children)}>
			{children}
		</Wrapper>
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

	Text: ({ onPress, children, disabled, ...props }) => (
		<Button onPress={onPress} title={children} {...props} />
	),
};
