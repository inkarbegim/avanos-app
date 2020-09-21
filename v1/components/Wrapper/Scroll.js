import * as React from "react";

import AsyncStorage from "@react-native-community/async-storage";
import Control from "../Control";
import { Inner } from "./styles";
import styled from "styled-components/native";
import theme from "../../theme";
import { useLocation } from "react-router-native";

export const Outer = styled.ScrollView`
	position: relative;
	display: flex;
	flex-grow: 1;
`;

// So that I can use the ref inside the component but also forward it
function useCombinedRefs(...refs) {
	const targetRef = React.useRef();

	React.useEffect(() => {
		refs.forEach((ref) => {
			if (!ref) return;

			if (typeof ref === "function") {
				ref(targetRef.current);
			} else {
				ref.current = targetRef.current;
			}
		});
	}, [refs]);

	return targetRef;
}

export const Scroll = React.forwardRef(
	({ outerProps, innerProps, children, control, textControl }, outerRef) => {
		const { pathname } = useLocation();

		const innerRef = React.useRef(null),
			scrollWrapper = useCombinedRefs(innerRef, outerRef);

		// Persist scroll position when returning to page
		React.useEffect(() => {
			if (scrollWrapper) {
				(async function () {
					let y;

					try {
						y = await AsyncStorage.getItem(`scroll.${pathname}`);
					} catch (ex) {
						console.error(ex);
					}

					if (y) {
						scrollWrapper.current.scrollTo({ y, animated: false });
					}
				})();
			}
		}, [scrollWrapper]);

		const storeScrollValue = async ({ nativeEvent }) => {
			try {
				await AsyncStorage.setItem(
					`scroll.${pathname}`,
					JSON.stringify(nativeEvent.contentOffset.y)
				);
			} catch (ex) {
				console.error(ex);
			}
		};

		return (
			<React.Fragment>
				<Outer
					onScroll={storeScrollValue}
					ref={scrollWrapper}
					{...outerProps}
					scrollEventThrottle={100}
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
			</React.Fragment>
		);
	}
);
