import * as React from "react";

import PunchFilled from "../../public/assets/punch-filled.svg";
import PunchEmpty from "../../public/assets/punch-empty.svg";
import { Paragraph } from "../styles";
import { Outer, TouchListener, Inner, Background, Body } from "./styles";

export const Choice = ({ selected, wrong, onPress, children }) => {
	return (
		<Outer wrong={wrong}>
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
