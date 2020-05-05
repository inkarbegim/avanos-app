import * as React from "react";
import { Wrapper, Tab } from "./styles";
import Icon from "../Icon";

const assetRoot = "../../public/assets";

const tabs = [
	{
		title: "Home",
		link: "/",
		icon: <Icon source={require(`${assetRoot}/home.svg`)} />,
	},
	{
		title: "Step by step",
		link: "/stepByStep",
		icon: <Icon source={require(`${assetRoot}/step-by-step.svg`)} />,
	},
	{
		title: "Multi-choice questions",
		link: "/multiChoiceQuestions",
		icon: <Icon source={require(`${assetRoot}/question.svg`)} />,
	},
	{
		title: "More",
		link: "/more",
		icon: <Icon source={require(`${assetRoot}/ellipsis.svg`)} />,
		iconStyle: { boxShadow: "0 5px 5px #00000040" },
	},
];

export const Footer = () => {
	return (
		<Wrapper>
			{tabs.map(({ title, link, icon, iconStyle }, key) => (
				<Tab.Outer key={`tab-${key}`}>
					<Tab.Link to={link}>
						<Tab.Inner>
							{React.cloneElement(icon, {
								color: "black",
								height: "25",
							})}
							{/* <TitleWrapper>
								<Title>{title}</Title>
							</TitleWrapper> */}
						</Tab.Inner>
					</Tab.Link>
				</Tab.Outer>
			))}
		</Wrapper>
	);
};
