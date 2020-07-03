import * as React from "react";

import PunchFilled from "../../public/assets/punch-filled.svg";
import PunchEmpty from "../../public/assets/punch-empty.svg";
import { Outer, TouchListener, Inner, Background, Body } from "./styles";

import { Animated } from "react-native";

export const Choice = ({ selected, attempted, correct, onPress, children }) => {
	const [wiggle] = React.useState(new Animated.Value(0));

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
				<TouchListener onPress={onPress}>
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
