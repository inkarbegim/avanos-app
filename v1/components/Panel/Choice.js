import * as React from "react";

import { Background, Body, Inner, Outer, TouchListener } from "./styles";

import { Animated } from "react-native";
import PunchEmpty from "../../public/assets/punch-empty.svg";
import PunchFilled from "../../public/assets/punch-filled.svg";

export const Choice = ({
	selected: initialSelected,
	attempted,
	correct,
	onPress,
	children,
	fillOnPress,
}) => {
	const [wiggle] = React.useState(new Animated.Value(0));
	const [selected, setSelected] = React.useState(initialSelected);

	const handlePress = (...params) => {
		if (fillOnPress) {
			setSelected(true);
		}

		onPress(...params);
	};

	const startWiggle = () => {
		Animated.sequence([
			Animated.timing(wiggle, {
				toValue: 10,
				duration: 50,
				useNativeDriver: true,
			}),
			Animated.timing(wiggle, {
				toValue: -10,
				duration: 50,
				useNativeDriver: true,
			}),
			Animated.timing(wiggle, {
				toValue: 10,
				duration: 50,
				useNativeDriver: true,
			}),
			Animated.timing(wiggle, {
				toValue: 0,
				duration: 50,
				useNativeDriver: true,
			}),
		]).start();
	};

	React.useEffect(() => {
		if (selected && attempted && !correct) {
			startWiggle();
		}
	}, []);

	return (
		<Outer
			style={{
				transform: [{ translateX: wiggle }],
			}}
			attempted={attempted}
			correct={correct}
		>
			<Background source={require("../../public/assets/transparent.png")}>
				<TouchListener onPress={handlePress}>
					<Inner>
						{selected ? (
							<PunchFilled width={30} />
						) : (
							<PunchEmpty width={30} />
						)}
						<Body>{children}</Body>
					</Inner>
				</TouchListener>
			</Background>
		</Outer>
	);
};
