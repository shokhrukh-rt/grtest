import { View, Text } from "react-native";
import React from "react";

const Tests = ({ route, navigation }) => {
	const { DiffLevel } = route.params;

	return (
		<View>
			<Text>Tests</Text>
		</View>
	);
};

export default Tests;
