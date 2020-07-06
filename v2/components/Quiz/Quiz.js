import * as React from "react";

import { useHistory, useLocation } from "react-router-native";

import { ActivityIndicator } from "react-native";
import Control from "../Control";
import { Title } from "../styles";
import Wrapper from "../Wrapper";

export const Quiz = ({ questions, onIdChange, id }) => {
	const history = useHistory();
	const location = useLocation();

	const [question, setQuestion] = React.useState();

	React.useEffect(() => {
		console.log({ location });

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
						Return to main menu
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
			{question.body}
		</Wrapper.Scroll>
	) : (
		<ActivityIndicator />
	);
};
