import * as React from "react";
import { Wrapper } from "./styles";
import { useHistory } from "react-router-native";
import { TabButton } from "./TabButton";

import tabs from "./data/tabs";

export const Footer = () => {
	const history = useHistory();
	const [pathname, setPathname] = React.useState(history.location.pathname);

	React.useEffect(() => {
		const unlisten = history.listen(({ pathname }) => {
			setPathname(pathname);
		});

		return unlisten;
	}, []);

	return (
		<Wrapper>
			{tabs.map(({ link, ...props }, index) => (
				<TabButton
					active={pathname.includes(link)}
					{...props}
					link={link}
					key={`tab-${index}`}
				/>
			))}
		</Wrapper>
	);
};
