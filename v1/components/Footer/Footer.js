import * as React from "react";
import { Wrapper, Tab, TitleWrapper, Title } from "./styles";
import { useHistory } from "react-router-native";
import TabButton from "./TabButton";

import tabs from "./data/tabs";

export const Footer = () => {
	const history = useHistory();
	const [pathname, setPathname] = React.useState(history.location.pathname);

	//console.log({ pathname });

	React.useEffect(() => {
		const unlisten = history.listen(({ pathname }) => {
			setPathname(pathname);
		});

		//console.log({ tabs });

		return unlisten;
	}, []);

	return (
		<Wrapper>
			{tabs.map((props, index) => (
				<TabButton {...props} key={`tab-${index}`} />
			))}
		</Wrapper>
	);
};
