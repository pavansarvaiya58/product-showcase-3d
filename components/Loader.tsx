import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React from "react";

const Loader = () => {
	return (
		<View style={styles.container}>
			<ActivityIndicator size={"large"} color={"white"} />
		</View>
	);
};

export default Loader;

const styles = StyleSheet.create({
	container: {
		...StyleSheet.absoluteFillObject,
		justifyContent: "center",
		alignItems: "center",
	},
});
