import { useHistory, useParams } from "react-router-native";

import { Quiz } from "../../../components/Quiz";
import React from "react";
import questions from "./data/questions";

export const CortrakUser = () => {
	const { id } = useParams();
	const history = useHistory();

	const handleIndexChange = (next, link = false) => {
		if (!link) {
			history.push(`/reference/cortrakUser/${next}`);
		} else {
			history.push(next);
		}
	};

	return (
		<Quiz questions={questions} id={id} onIdChange={handleIndexChange} />
	);
};
