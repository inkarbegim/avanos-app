import * as React from "react";

import * as ScreenOrientation from "expo-screen-orientation";

import NgPlacement from "./screens/NgPlacement";
// import * as StepByStep from "./screens/NgPlacement-OLD";
import * as BedsidePlacement from "./screens/BedsidePlacement";
import MoreLinks from "./screens/MoreLinks";

import theme from "./theme";
import { NativeRouter, Route, Redirect } from "react-router-native";

import { ThemeProvider } from "styled-components/native";
import { useFonts } from "@use-expo/font";
import { AppLoading } from "expo";

import Layout from "./components/Layout";
import MultipleChoiceQuestions from "./screens/MultipleChoiceQuestions";

export default function App() {
	const [fontsLoaded] = useFonts({
		"Avanos Sans": require("./public/fonts/AvanosSans.otf"),
		"Avanos Sans Bold": require("./public/fonts/AvanosSans-Bold.otf"),
	});

	React.useEffect(() => {
		ScreenOrientation.lockAsync(
			ScreenOrientation.OrientationLock.PORTRAIT_UP
		);
	}, []);

	if (!fontsLoaded) {
		return <AppLoading />;
	} else {
		return (
			<NativeRouter>
				<ThemeProvider theme={theme}>
					<Layout>
						<Redirect exact from="/" to="/ngPlacement" />
						<Route
							path="/ngPlacement"
							render={(props) => <NgPlacement />}
						/>
						{/* <Route
							path="/stepByStep"
							render={(props) => <StepByStep.Router {...props} />}
						/> */}
						<Route
							path="/bedsidePlacement"
							render={(props) => (
								<BedsidePlacement.Router {...props} />
							)}
						/>
						<Route
							path="/multipleChoiceQuestions/:index"
							render={(props) => (
								<MultipleChoiceQuestions {...props} />
							)}
						/>
						<Route
							path="/moreLinks"
							render={(props) => <MoreLinks {...props} />}
						/>
					</Layout>
				</ThemeProvider>
			</NativeRouter>
		);
	}
}
