import React from "react";
import Wrapper from "../../components/Wrapper";
import styled from "styled-components/native";
import { Paragraph } from "../../components/styles";
import theme from "../../theme";
import { Panel } from "../../components/Panel";
import Icon from "../../components/Icon";
import { Image } from "react-native";

const Title = styled(Paragraph)`
	margin-top: ${theme.gutter}px;
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
			{linkSections.map(({ title, links }) => (
				<React.Fragment>
					<Title>{title}</Title>
					{links.map(({ title, link }, index) => (
						<Panel
							key={`more-links-${index}`}
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
				</React.Fragment>
			))}
			<Title>Contributors</Title>
			<Image
				style={{
					marginLeft: "auto",
					marginRight: "auto",
					marginBottom: theme.gutter * 2,
				}}
				source={require("../../public/assets/logos.png")}
			/>
		</Wrapper.Scroll>
	);
};
