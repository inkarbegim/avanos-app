import React from "react";
import { Quiz } from "../../../components/Quiz";
import questions from "./data/questions";

import { useParams, useHistory } from "react-router-native";

export const CortrakUser = () => {
	const { id } = useParams();
	const history = useHistory();

	const handleIndexChange = (id) => {
		history.push(`/reference/cortrakUser/${id}`);
	};

	return id ? (
		<Quiz questions={questions} id={id} onIdChange={handleIndexChange} />
	) : (
		<Error>No question id specified</Error>
	);
};
