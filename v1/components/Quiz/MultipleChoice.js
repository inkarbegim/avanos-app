import * as Haptics from "expo-haptics";
import * as React from "react";

import { ActivityIndicator } from "react-native";
import Badge from "../Badge";
import { Choice } from "../Panel";
import Control from "../Control";
import { Image } from "react-native";
import { Title } from "./styles";
import Wrapper from "../Wrapper";

export const MultipleChoice = ({ questions, onIndexChange, index }) => {
	const ref = React.useRef(null);

	const [question, setQuestion] = React.useState();
	const [selected, setSelected] = React.useState(null);
	const [attempted, setAttempted] = React.useState(false);
	const [correct, setCorrect] = React.useState(false);

	React.useEffect(() => {
		if (index && questions) {
			setQuestion(questions[index]);
		}
	}, [index, questions]);

	const handleNext = () => {
		setAttempted(true);

		if (question.buttons[selected][1] === true) {
			setCorrect(true);

			// Delay so the user can see the positive feedback
			window.setTimeout(() => {
				setSelected(null);
				if (+index < questions.length) onIndexChange(+index + 1);
			}, 500);
		} else {
			Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);

			setCorrect(false);
		}
	};

	const handleSelect = (key) => {
		setAttempted(false);
		setSelected(key);
	};

	React.useEffect(() => {}, [selected]);

	React.useEffect(() => {
		if (ref.current) ref.current.scrollTo({ y: 0 });
	}, []);

	return question ? (
		<Wrapper.Scroll
			ref={ref}
			control={
				<Control.Right
					disabled={selected === null}
					onPress={handleNext}
				/>
			}
		>
			{question.title && (
				<Title style={{ marginBottom: 20 }}>{question.title}</Title>
			)}

			{question.buttons.map(([text, correct], key) => (
				<Choice
					selected={selected === key}
					onPress={handleSelect.bind(null, key)}
					attempted={selected === key && attempted}
					correct={correct}
					key={`mcq-${index}-${key}-${Math.random()}`}
				>
					{/* For some reason all the panels become 
					one-liners if you don't repaint with the badge, 
					hence the random key */}
					{text}
				</Choice>
			))}

			<Badge variant={correct ? "success" : "danger"} show={attempted}>
				{correct ? "Correct" : "Wrong"} answer
			</Badge>
		</Wrapper.Scroll>
	) : (
		<ActivityIndicator />
	);
};
