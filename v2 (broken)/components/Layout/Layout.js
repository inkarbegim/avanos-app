import * as React from "react";

import Footer from "../Footer";
import { SafeAreaView } from "react-native";

export const Layout = ({ children }) => {
	return (
		<SafeAreaView style={{ flex: 1, paddingTop: 10 }}>
			{children}
			{/* <Footer /> */}
		</SafeAreaView>
	);
};
