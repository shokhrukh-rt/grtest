import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home, Tests } from "./screens";
const Stack = createNativeStackNavigator();
const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="Home"
					component={Home}
					options={{ title: "Welcome" }}
				/>
				<Stack.Screen
					name="Tests"
					component={Tests}
					options={{ title: "Tests" }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
