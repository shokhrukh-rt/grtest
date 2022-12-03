import { View, Text, FlatList, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";

//trim the string with string.trim()
// replace character with string.replace("character", "")

const Tests = ({ route, navigation }) => {
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState([]);
	const { DiffLevel } = route.params;

	const url = () => {
		if (DiffLevel == "Beginner")
			return "http://211.208.156.232:5000/grammar/easy";
		if (DiffLevel == "Intermediate")
			return "http://211.208.156.232:5000/grammar/intermediate";
		if (DiffLevel == "Advanced")
			return "http://211.208.156.232:5000/grammar/advanced";
	};

	const getTests = async () => {
		try {
			const res = await fetch(url);
			const json = await res.json();
			setData(json);
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		getTests();
	}, []);
	return (
		<ScrollView style={{ flex: 1 }}>
			{loading ? (
				<Text>Loading</Text>
			) : (
				data.map((questions, i) => {
					return (
						<View>
							<Text>{questions.qNumber}</Text>

							<Text>{questions.qText}</Text>
							{questions.answers.map((answer) => (
								<Text>{answer.answerText}</Text>
							))}
						</View>
					);
				})
			)}
		</ScrollView>
	);
};

export default Tests;
