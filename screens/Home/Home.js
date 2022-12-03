import React, { useState } from "react";
import {
	View,
	Text,
	TouchableOpacity,
	SafeAreaView,
	StyleSheet,
} from "react-native";

const levelNames = ["Beginner", "Intermediate", "Advanced"];

const Home = ({ navigation }) => {
	const loadTests = (level) => {
		navigation.navigate("Tests", { name: "Tests", DiffLevel: level });
	};

	return (
		<SafeAreaView style={styles.container}>
			<View>
				{levelNames.map((level, i) => (
					<TouchableOpacity
						style={styles.button}
						key={i}
						onPress={() => loadTests(level)}
					>
						<Text style={styles.title}>{level}</Text>
					</TouchableOpacity>
				))}
			</View>
		</SafeAreaView>
	);
};

export default Home;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",

		backgroundColor: "#C7FFED",
	},
	button: {
		alignItems: "center",
		backgroundColor: "#008F8C",
		padding: 25,
		marginTop: 20,
		marginBottom: 20,
		marginHorizontal: 15,

		borderRadius: 10,
	},
	title: {
		textAlign: "center",
		marginVertical: 8,
		color: "#042326",
		fontSize: 16,
	},

	separator: {
		marginVertical: 8,
		borderBottomColor: "#737373",
		borderBottomWidth: StyleSheet.hairlineWidth,
	},
});
