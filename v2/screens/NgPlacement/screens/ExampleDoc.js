import { Dimensions, Image } from "react-native";

import { Paragraph } from "../../../components/styles";
import React from "react";
import Wrapper from "../../../components/Wrapper";
import theme from "../../../theme";

const assetRoot = "../../../public/assets/ng-placement";

export const ExampleDoc = () => (
	<Wrapper.Scroll>
		<Image
			source={require(`${assetRoot}/example-doc.png`)}
			style={{
				width: Dimensions.get("window").width - theme.gutter * 2,
				height: Dimensions.get("window").height - 200,
				resizeMode: "contain",
			}}
		/>
	</Wrapper.Scroll>
);
