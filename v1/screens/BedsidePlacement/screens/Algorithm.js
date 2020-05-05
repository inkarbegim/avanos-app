import * as React from "react";

import { Quiz } from "../../../components/Quiz";
import Wrapper from "../../../components/Wrapper";
import questions from "../data/questions";
import { useParams, useHistory, useLocation } from "react-router-native";
import { Title } from "../../../components/styles";
import { ActivityIndicator } from "react-native";

export const Algorithm = () => {
	const history = useHistory();
	const params = useParams();

	const handleIndexChange = (id) => {
		history.push(`/bedsidePlacement/algorithm/${id}`);
	};

	return (
		<Wrapper.Scroll>
			{params ? (
				<Quiz
					questions={questions}
					id={params.id}
					onIdChange={handleIndexChange}
				/>
			) : (
				<ActivityIndicator />
			)}
		</Wrapper.Scroll>
	);
};
