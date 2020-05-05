import * as React from "react";

import Wrapper from "../../components/Wrapper";
import { ScreenTitle } from "../../components/styles";
import questions from "./data/questions";
import { MultipleChoice } from "../../components/Quiz";

import { useHistory, useParams } from "react-router-native";

export const MultipleChoiceQuestions = ({ onLoad }) => {
	const params = useParams();
	const history = useHistory();
	const ref = React.useRef(null);

	React.useEffect(() => {
		if (onLoad) onLoad();
	}, []);

	const handleIndexChange = (index) => {
		history.push(`/multipleChoiceQuestions/${index}`);

		if (ref.current) ref.current.scrollTo({ y: 0 });
	};

	return params ? (
		<>
			<ScreenTitle.Outer>
				<ScreenTitle.Inner>
					<ScreenTitle.Back />
					<ScreenTitle.Text>
						Multiple Choice Questions
					</ScreenTitle.Text>
				</ScreenTitle.Inner>
			</ScreenTitle.Outer>
			<Wrapper.Scroll ref={ref}>
				<MultipleChoice
					index={params.index}
					onIndexChange={handleIndexChange}
					questions={questions}
				/>
			</Wrapper.Scroll>
		</>
	) : (
		<ActivityIndicator />
	);
};
