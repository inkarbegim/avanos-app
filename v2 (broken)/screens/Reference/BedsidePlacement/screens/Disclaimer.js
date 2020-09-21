import * as React from "react";
import Wrapper from "../../../../components/Wrapper";
import { Title } from "./styles";
import Control from "../../../../components/Control";
import { useHistory } from "react-router-native";
import { Paragraph, BottomRule } from "../../../../components/styles";

export const Disclaimer = () => {
	const history = useHistory();

	return (
		<Wrapper.Scroll
			control={
				<Control.Right
					onPress={() =>
						history.push("/reference/bedsidePlacement/algorithm/A")
					}
				/>
			}
		>
			<Title style={{ marginTop: 30 }}>
				This App is not intended to replace face-to-face training and
				should be used in conjunction with training from an experienced
				health professional.
			</Title>
		</Wrapper.Scroll>
	);
};
