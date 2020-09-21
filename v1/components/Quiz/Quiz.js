import * as React from "react";

import { ActivityIndicator } from "react-native";
import Control from "../Control";
import { Image } from "./styles";
import { Title } from "../styles";
import Wrapper from "../Wrapper";
import { useHistory } from "react-router-native";

export const Quiz = ({ questions, onIdChange, id }) => {
	const history = useHistory();

	const [question, setQuestion] = React.useState();

	React.useEffect(() => {
		if (id && questions) {
			setQuestion(questions.find((q) => q.id === id));
		}
	}, [id, questions]);

	const handleButtonPress = (target, link) => {
		if (link) history.push(target);
		else onIdChange(target);
	};

	return question ? (
		<Wrapper.Scroll
			control={
				question.hasOwnProperty("buttons") ? (
					<React.Fragment>
						{question.buttons.map(
							([element, target, link = false], key) =>
								React.cloneElement(element, {
									key: `control-quiz-${key}`,
									fillOnPress: true,
									onPress: handleButtonPress.bind(
										this,
										target,
										link
									),
								})
						)}
					</React.Fragment>
				) : (
					<Control.Text onPress={() => history.push("/reference")}>
						Return to menu
					</Control.Text>
				)
			}
			textControl={
				question.hasOwnProperty("textControl") ||
				!question.hasOwnProperty("buttons")
			}
		>
			{question.title && (
				<Title style={{ marginBottom: 20 }}>{question.title}</Title>
			)}
			{question.images &&
				question.images.map((source, key) => (
					<Image
						resizeMode="contain"
						key={`card-image-${key}`}
						source={source}
					/>
				))}
			{question.body}
		</Wrapper.Scroll>
	) : (
		<ActivityIndicator />
	);
};
