import { Tab, Title, TitleWrapper } from "./styles";

import { Animated } from "react-native";
import React from "react";
import { useHistory } from "react-router-native";

export const TabButton = ({ active, link, title, icon }) => {
	const [scale] = React.useState(new Animated.Value(1));

	const history = useHistory();

	React.useEffect(() => {}, []);

	const handlePressIn = () => {
		Animated.timing(scale, {
			toValue: 1.1,
			duration: 100,
			useNativeDriver: true,
		}).start();
	};

	const handlePressOut = () => {
		Animated.timing(scale, {
			toValue: 1,
			duration: 100,
			useNativeDriver: true,
		}).start();
	};

	return (
		<Tab.Outer
			onPressIn={handlePressIn}
			onPress={() => history.push(link)}
			onPressOut={handlePressOut}
		>
			<Tab.Inner
				active={active}
				style={{
					transform: [{ scaleX: scale }, { scaleY: scale }],
				}}
			>
				{React.cloneElement(icon, {
					color: "black",
					height: "25",
				})}
				<TitleWrapper>
					<Title>{title}</Title>
				</TitleWrapper>
			</Tab.Inner>
		</Tab.Outer>
	);
};
