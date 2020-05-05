import * as React from "react";

import { ActivityIndicator } from "react-native";
import { Title } from "../styles";
import Control from "../Control";

export const Quiz = ({ questions, onIdChange, id }) => {
	const [question, setQuestion] = React.useState();

	React.useEffect(() => {
		console.log("id", id);
		if (id && questions) {
			setQuestion(questions.find((q) => q.id === id));
		}
	}, [id, questions]);

	return question ? (
		<>
			{question.title && (
				<Title style={{ marginBottom: 20 }}>{question.title}</Title>
			)}
			{question.body}
			{question.buttons && (
				<Control.Wrapper inline>
					{question.buttons.map(([element, target], key) =>
						React.cloneElement(element, {
							key: `control-alg-${key}`,
							onPress: onIdChange.bind(this, target),
						})
					)}
				</Control.Wrapper>
			)}
		</>
	) : (
		<ActivityIndicator />
	);
};
