import * as React from "react";

import questions from "./data/questions";
import { MultipleChoice } from "../../components/Quiz";

import { useHistory, useParams } from "react-router-native";

export const Questions = ({ onLoad }) => {
	const params = useParams();
	const history = useHistory();
	const ref = React.useRef(null);

	React.useEffect(() => {
		if (onLoad) onLoad();
	}, []);

	const handleIndexChange = (index) => {
		history.push(`/questions/${index}`);
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
