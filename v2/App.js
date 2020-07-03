import * as React from "react";
import { NativeRouter, Route, Redirect } from "react-router-native";
import Stack from "react-router-native-stack";

import * as ScreenOrientation from "expo-screen-orientation";

import * as NgPlacement from "./screens/NgPlacement";
import MoreLinks from "./screens/MoreLinks";
import * as Reference from "./screens/Reference";
import Questions from "./screens/Questions";

import theme from "./theme";

import { ThemeProvider } from "styled-components/native";
import { useFonts } from "@use-expo/font";
import { AppLoading } from "expo";

import { Animated, Image, Dimensions, Easing } from "react-native";
import { Asset } from "expo-asset";

import Header from "./components/Header";
import Footer from "./components/Footer";
import InitialDisclaimer from "./screens/InitialDisclaimer";

const splashAnimationDuration = 1000;

export default function App() {
	const [fontsLoaded] = useFonts({
		"Avanos Sans": require("./public/fonts/AvanosSans.otf"),
		"Avanos Sans Bold": require("./public/fonts/AvanosSans-Bold.otf"),
	});

	const [agreedToDisclaimer, setAgreedToDisclaimer] = React.useState(false);
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
										<Header>NG Placement</Header>
									)}
									footerComponent={Footer}
								/>
								<Route
									path="/reference"
									component={Reference.Router}
									headerComponent={() => (
										<Header>Reference</Header>
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
										<Header>More Links</Header>
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
