import * as React from "react";

import * as ScreenOrientation from "expo-screen-orientation";

import Home from "./screens/Home";
import * as StepByStep from "./screens/StepByStep";
import * as BedsidePlacement from "./screens/BedsidePlacement";
import { ThemeProvider } from "styled-components/native";

import theme from "./theme";
import { NativeRouter, Route } from "react-router-native";

import { useFonts } from "@use-expo/font";
import { AppLoading } from "expo";
import More from "./screens/More";

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
						<Route path="/" exact render={(props) => <Home />} />
						<Route
							path="/stepByStep"
							render={(props) => <StepByStep.Router {...props} />}
						/>
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
						<Route path="/more" render={(props) => <More />} />
					</Layout>
				</ThemeProvider>
			</NativeRouter>
		);
	}
}
