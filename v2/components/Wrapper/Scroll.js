import * as React from "react";
import theme from "../../theme";
import { Inner } from "./styles";
import Control from "../Control";
import styled from "styled-components/native";

export const Outer = styled.ScrollView`
	position: relative;
	display: flex;
	flex-grow: 1;
`;

export const Scroll = React.forwardRef(
	(
		{ outerProps, innerProps, children, control, textControl },
		scrollWrapper
	) => {
		return (
			<>
				<Outer
					ref={scrollWrapper}
					{...outerProps}
					contentContainerStyle={{
						paddingTop: theme.gutter,
						display: "flex",
						flexGrow: 1,
					}}
				>
					<Inner {...innerProps} style={{ flex: 1 }}>
						{children}
					</Inner>
					{control && (
						<Control.Wrapper inline textControl={textControl}>
							{control}
						</Control.Wrapper>
					)}
				</Outer>
			</>
		);
	}
);
