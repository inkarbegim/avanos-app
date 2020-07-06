import * as React from "react";

import { useHistory, useParams } from "react-router-native";

import { Quiz } from "../../../components/Quiz";
import questions from "./data/questions";

export const ChestRadiograph = () => {
	const history = useHistory();
	const params = useParams();

	const handleIndexChange = (id) => {
		history.push(`/reference/chestRadiograph/${id}`);
	};

	return (
		<Quiz
			questions={questions}
			id={params.id}
			onIdChange={handleIndexChange}
		/>
	);
};
