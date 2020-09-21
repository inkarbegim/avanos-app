import * as React from "react";

import { useHistory, useParams } from "react-router-native";

import { Quiz } from "../../../../components/Quiz";
import questions from "../data/questions";

export const Algorithm = () => {
	const history = useHistory();
	const params = useParams();

	const handleIndexChange = (id) => {
		history.push(`/reference/bedsidePlacement/algorithm/${id}`);
	};

	return (
		<Quiz
			questions={questions}
			id={params.id}
			onIdChange={handleIndexChange}
		/>
	);
};
