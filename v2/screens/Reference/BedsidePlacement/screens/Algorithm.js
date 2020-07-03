import * as React from "react";

import { Quiz } from "../../../../components/Quiz";
import questions from "../data/questions";
import { useParams, useHistory } from "react-router-native";

export const Algorithm = () => {
	const history = useHistory();
	const params = useParams();

	const handleIndexChange = (id) => {
		history.push(`/reference/bedsidePlacement/algorithm/${id}`);
	};

	return params ? (
		<Quiz
			questions={questions}
			id={params.id}
			onIdChange={handleIndexChange}
		/>
	) : (
		<Error>No question ID specified</Error>
	);
};
