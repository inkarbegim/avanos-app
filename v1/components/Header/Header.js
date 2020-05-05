import React from "react";
import { LogoWrapper } from "./styles";
import Logo from "../../public/assets/logo.svg";

export const Header = () => {
	return (
		<LogoWrapper>
			<Logo color="black" />
		</LogoWrapper>
	);
};
