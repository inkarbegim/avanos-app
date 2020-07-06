import { Image, View } from "react-native";

import Icon from "../../components/Icon";
import { Panel } from "../../components/Panel";
import { Paragraph } from "../../components/styles";
import React from "react";
import { Section } from "./styles";
import Wrapper from "../../components/Wrapper";
import sections from "./data/sections";
import styled from "styled-components/native";
import theme from "../../theme";

const Title = styled(Paragraph)`
	font-family: ${theme.font.family.bold};
`;

export const MoreLinks = () => {
	return (
		<Wrapper.Scroll>
			{sections.map(({ title, links }, outerIndex) => (
				<Section key={`ml-section-${outerIndex}`}>
					<Title>{title}</Title>
					{links.map(({ title, link, icon }, innerIndex) => (
						<Panel
							key={`ml-panel-${innerIndex}`}
							icon={
								<Icon
									source={
										icon ||
										require("../../public/assets/doc.svg")
									}
									height={30}
								/>
							}
							link={link}
							external={true}
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
