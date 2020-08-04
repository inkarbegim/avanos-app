import * as NgPlacement from "./screens/NgPlacement";
import * as React from "react";
import * as ScreenOrientation from "expo-screen-orientation";

import { Animated, Dimensions, Easing, Image } from "react-native";
import {
	BedsidePlacement,
	ChestRadiograph,
	CortrakUser,
	Reference,
} from "./screens/Reference";
import { NativeRouter, Redirect, Route } from "react-router-native";

import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import Footer from "./components/Footer";
import Header from "./components/Header";
import InitialDisclaimer from "./screens/InitialDisclaimer";
import MoreLinks from "./screens/MoreLinks";
import Questions from "./screens/Questions";
import Stack from "react-router-native-stack";
import { ThemeProvider } from "styled-components/native";
import theme from "./theme";
import { useFonts } from "@use-expo/font";

const splashAnimationDuration = 1000;

export default function App() {
	const [fontsLoaded] = useFonts({
		"Avanos Sans": require("./public/fonts/AvanosSans.otf"),
		"Avanos Sans Bold": require("./public/fonts/AvanosSans-Bold.otf"),
		"Avanos Sans Italic": require("./public/fonts/AvanosSans-Italic.otf"),
	});
	const [splashLoaded, setSplashLoaded] = React.useState(false);
	const [splashFade] = React.useState(new Animated.Value(1));
	const [splashShowing, setSplashShowing] = React.useState(true);

	const startSplashFade = () => {
		Animated.timing(splashFade, {
			toValue: 0,
			duration: splashAnimationDuration,
			easing: Easing.out(Easing.ease),
		}).start();

		return true;
	};

	React.useEffect(() => {
		ScreenOrientation.lockAsync(
			ScreenOrientation.OrientationLock.PORTRAIT_UP
		);

		(async function () {
			await Asset.loadAsync(require("./public/assets/splash.png"));
			setSplashLoaded(true);
		})();
	}, []);

	React.useEffect(() => {
		if (fontsLoaded && splashLoaded) {
			setTimeout(() => setSplashShowing(false), splashAnimationDuration);
		}
	}, [fontsLoaded, splashLoaded]);

	if (!fontsLoaded || !splashLoaded) {
		return <AppLoading />;
	} else {
		return (
			startSplashFade() && (
				<React.Fragment>
					{splashShowing && (
						<Animated.View
							style={{
								position: "absolute",
								zIndex: 1000,
								opacity: splashFade,
							}}
						>
							<Image
								style={{
									width: Dimensions.get("window").width,
									height: Dimensions.get("window").height,
									resizeMode: "cover",
								}}
								source={require("./public/assets/splash.png")}
							/>
						</Animated.View>
					)}
					<NativeRouter>
						<ThemeProvider theme={theme}>
							<Stack>
								<Route
									path="/disclaimer"
									component={InitialDisclaimer}
									headerComponent={() => (
										<Header>Disclaimer</Header>
									)}
								/>
								<Route
									path="/ngPlacement"
									component={NgPlacement.Router}
									headerComponent={() => (
										<Header>Placement</Header>
									)}
									footerComponent={Footer}
								/>
								<Route
									exact
									path="/reference"
									component={Reference}
									headerComponent={() => (
										<Header>Confirmation</Header>
									)}
									footerComponent={Footer}
								/>
								<Route
									path="/reference/cortrakUser/:id"
									component={CortrakUser}
									headerComponent={() => (
										<Header>CORTRAK*</Header>
									)}
									footerComponent={Footer}
								/>
								<Route
									path="/reference/chestRadiograph/:id"
									component={ChestRadiograph}
									headerComponent={() => (
										<Header>X-ray Check</Header>
									)}
									footerComponent={Footer}
								/>
								<Route
									path="/reference/bedsidePlacement"
									component={BedsidePlacement.Router}
									headerComponent={() => (
										<Header>pH Check</Header>
									)}
									footerComponent={Footer}
								/>
								<Route
									path="/questions/:index"
									component={Questions}
									headerComponent={() => (
										<Header>Questions</Header>
									)}
									footerComponent={Footer}
								/>
								<Route
									path="/moreLinks"
									component={MoreLinks}
									headerComponent={() => (
										<Header>More</Header>
									)}
									footerComponent={Footer}
								/>
								<Redirect exact from="/" to="/disclaimer" />
							</Stack>
						</ThemeProvider>
					</NativeRouter>
				</React.Fragment>
			)
		);
	}
}
