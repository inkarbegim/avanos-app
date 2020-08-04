import * as React from "react";

import { Background, Body, Inner, Outer, TouchListener } from "./styles";

import Chevron from "../../public/assets/chevron-right.svg";
import { Linking } from "react-native";
import { useHistory } from "react-router-native";

export const Panel = ({ link, icon, children, external }) => {
	const history = useHistory();

	const [active, setActive] = React.useState(false);

	const handlePress = () => {
		if (link) {
			if (external) Linking.openURL(link);
			else history.push(link);
		}
	};

	return (
		<Outer>
			<Background
				source={
					active
						? require("../../public/assets/gradient.png")
						: require("../../public/assets/transparent.png")
				}
			>
				<TouchListener
					onPressIn={() => setActive(true)}
					onPress={handlePress}
					onPressOut={() => setActive(false)}
				>
					<Inner>
						{icon &&
							React.cloneElement(icon, {
								color: active ? "white" : "black",
								width: 30,
							})}
						<Body active={active}>{children}</Body>
						{link && <Chevron color={active ? "white" : "black"} />}
					</Inner>
				</TouchListener>
			</Background>
		</Outer>
	);
};
