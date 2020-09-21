import * as React from "react";

import { useHistory, useParams } from "react-router-native";

import { MultipleChoice } from "../../components/Quiz";
import questions from "./data/questions";

export const Questions = ({ onLoad }) => {
	const params = useParams();
	const history = useHistory();
	const ref = React.useRef(null);

	React.useEffect(() => {
		if (onLoad) onLoad();
	}, []);

	const handleIndexChange = (index) => {
		if (index < questions.length) history.push(`/questions/${index}`);
		else history.push("/reference");
	};

	return (
		<React.Fragment>
			<MultipleChoice
				index={params.index}
				onIndexChange={handleIndexChange}
				questions={questions}
			/>
		</React.Fragment>
	);
};
