import { Paragraph, Title } from "../../components/styles";

import Control from "../../components/Control";
import { Linking } from "react-native";
import React from "react";
import Wrapper from "../../components/Wrapper";

const VisualColourTest = () => {
	return (
		<Wrapper.Scroll
			control={
				<Control.Right
					onPress={() =>
						Linking.openURL("https://www.xrite.com/hue-test")
					}
				/>
			}
		>
			<Title>Visual Colour Test</Title>
			<Paragraph style={{ textAlign: "center" }}>
				This will take you to an external URL
			</Paragraph>
		</Wrapper.Scroll>
	);
};

export default VisualColourTest;
