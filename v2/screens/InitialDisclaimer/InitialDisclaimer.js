import * as Haptics from "expo-haptics";

import { Button, ButtonText, ButtonWrapper, Paragraph } from "./styles";

import React from "react";
import Wrapper from "../../components/Wrapper";
import { useHistory } from "react-router-native";

export const InitialDisclaimer = () => {
	const history = useHistory();

	const handleAgree = () => {
		history.push("/ngPlacement");
	};

	const handleDisagree = () => {
		// Do something really nasty!
		Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
	};

	return (
		<Wrapper.Scroll>
			<Paragraph>
				The following instructions are not intended to replace
				face-to-face training and should be used in conjunction with
				training from an experienced healthcare professional. BAPEN
				endorses the educational material held within, but has no
				relationship with sponsoring company or product. If you accept
				this disclaimer please tap "Yes" below.
			</Paragraph>
			<ButtonWrapper>
				<Button onPress={handleDisagree} variant="danger">
					<ButtonText>No</ButtonText>
				</Button>
				<Button onPress={handleAgree} variant="success">
					<ButtonText>Yes</ButtonText>
				</Button>
			</ButtonWrapper>
		</Wrapper.Scroll>
	);
};
