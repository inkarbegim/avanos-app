import * as React from "react";

import Wrapper from "../Wrapper";
import { Title } from "../styles";
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
				question.buttons && (
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
				)
			}
			textControl={question.hasOwnProperty("textControl")}
		>
			{question.title && (
				<Title style={{ marginBottom: 20 }}>{question.title}</Title>
			)}
			{question.body}
		</Wrapper.Scroll>
	) : (
		<Error>No question ID specified</Error>
	);
};
