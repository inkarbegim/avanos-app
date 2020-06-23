import React from "react";
import { Tab, TitleWrapper, Title } from "./styles";
// import { Animated } from "react-native";

export const TabButton = ({ link, title, icon }) => {
	// const [scale] = React.useState(new Animated.Value(1));

	React.useEffect(() => {}, []);

	const handlePressIn = () => {
		// Animated.timing(scale, {
		// 	toValue: 2,
		// 	duration: 300,
		// }).start();
	};

	const handlePressOut = () => {
		// Animated.timing(scale, {
		// 	toValue: 1,
		// 	duration: 300,
		// }).start();
	};

	return (
		<Tab.Outer onPressIn={handlePressIn} onPressOut={handlePressOut}>
			<Tab.Link to={link}>
				<Tab.Inner
					active={pathname.includes(link)}
					// style={{
					// 	transform: [{ scaleX: scale, scaleY: scale }],
					// }}
				>
					{React.cloneElement(icon, {
						color: "black",
						height: "25",
					})}
					<TitleWrapper>
						<Title>{title}</Title>
					</TitleWrapper>
				</Tab.Inner>
			</Tab.Link>
		</Tab.Outer>
	);
};
