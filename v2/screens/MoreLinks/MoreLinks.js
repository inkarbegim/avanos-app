import React from "react";
import Wrapper from "../../components/Wrapper";
import styled from "styled-components/native";
import { Paragraph } from "../../components/styles";
import theme from "../../theme";
import { Panel } from "../../components/Panel";
import Icon from "../../components/Icon";
import { Image, View } from "react-native";
import { Section } from "./styles";

const Title = styled(Paragraph)`
	font-family: ${theme.font.family.bold};
`;

const linkSections = [
	{
		title: "Contact us",
		links: [
			{
				title: "Call us",
				// link: "tel:",
			},
			{
				title: "Email",
				// link: "mailto:",
			},
			{
				title: "Visit our site",
				link: "https://avanos.com/",
			},
		],
	},
	{
		title: "PDFs",
		links: [
			{
				title: "Decision Tree",
			},
			{
				title: "Decision Tree (online)",
			},
		],
	},
];
export const MoreLinks = () => {
	return (
		<Wrapper.Scroll>
			{linkSections.map(({ title, links }, outerIndex) => (
				<Section key={`ml-section-${outerIndex}`}>
					<Title>{title}</Title>
					{links.map(({ title, link }, innerIndex) => (
						<Panel
							key={`ml-panel-${innerIndex}`}
							icon={
								<Icon
									source={require("../../public/assets/doc.svg")}
								/>
							}
							link={link}
						>
							{title}
						</Panel>
					))}
				</Section>
			))}
			<Section>
				<Title>Contributors</Title>
				<View
					style={{
						marginLeft: "auto",
						marginRight: "auto",
					}}
				>
					<Image source={require("../../public/assets/logos.png")} />
				</View>
			</Section>
		</Wrapper.Scroll>
	);
};
