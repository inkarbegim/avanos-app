import * as React from "react";
import { Title } from "../styles";
import { ActivityIndicator } from "react-native";
import Control from "../Control";
import Badge from "../Badge";
import { Choice } from "../Panel";

export const MultipleChoice = ({ questions, onIndexChange, index }) => {
	const [question, setQuestion] = React.useState();
	const [selected, setSelected] = React.useState(null);
	const [showBadge, setShowBadge] = React.useState(false);

	React.useEffect(() => {
		console.log("index", index);
		if (index && questions) {
			setQuestion(questions[index]);
		}
	}, [index, questions]);

	const handleNext = () => {
		if (question.buttons[selected][1] === true) {
			setSelected(null);
			setShowBadge(false);

			if (+index < questions.length) onIndexChange(+index + 1);
		} else {
			setShowBadge(true);
		}
	};

	React.useEffect(() => {
		setShowBadge(false);
	}, [selected]);

	return question ? (
		<>
			{question.title && (
				<Title style={{ marginBottom: 20 }}>{question.title}</Title>
			)}

			{question.buttons.map(([text, correct], key) => (
				<Choice
					selected={selected === key}
					onPress={() => setSelected(key)}
					wrong={selected === key && showBadge && !correct}
					key={`mcq-${index}-${key}-${Math.random()}`}
				>
					{/* For some reason all the panels become 
					one-liners if you don't repaint with the badge, 
					hence the random key */}
					{text}
				</Choice>
			))}

			<Badge hidden={!showBadge}>Wrong answer</Badge>

			<Control.Wrapper inline>
				<Control.Right
					disabled={selected === null}
					onPress={handleNext}
				/>
			</Control.Wrapper>
		</>
	) : (
		<ActivityIndicator />
	);
};
