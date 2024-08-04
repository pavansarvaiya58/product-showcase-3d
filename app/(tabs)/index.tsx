import {
	Image,
	StyleSheet,
	Platform,
	View,
	Text,
	StatusBar,
	SafeAreaView,
	TouchableOpacity,
} from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { Starlink } from "@/components/Starlink";
import useControls from "r3f-native-orbitcontrols";
import Trigger from "@/components/Trigger";
import Loader from "@/components/Loader";
import Gradient from "@/components/Gradient";

const HomeScreen = () => {
	const [OrbitControls, event] = useControls();
	const [loading, setLoading] = useState(false);

	return (
		<SafeAreaView style={styles.container}>
			<StatusBar animated barStyle={"light-content"} />
			<View style={styles.textContainer}>
				<Text style={styles.textTitle}>Paired Successfully</Text>
				<Text style={styles.text}>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem ab
					commodi impedit optio, dignissimos
				</Text>
			</View>
			<View style={styles.modelContainer} {...event}>
				<Gradient tab={1} />
				{loading && <Loader />}
				<Canvas>
					<OrbitControls enablePan={false} enableZoom={false} />
					<directionalLight position={[1, 0, 0]} args={["white", 2]} />
					<directionalLight position={[-1, 0, 0]} args={["white", 2]} />
					<directionalLight position={[0, 0, 1]} args={["white", 2]} />
					<directionalLight position={[0, 0, -1]} args={["white", 2]} />
					<directionalLight position={[0, 1, 0]} args={["white", 15]} />
					<directionalLight position={[0, -1, 0]} args={["white", 2]} />
					<Suspense fallback={<Trigger setLoading={setLoading} />}>
						<Starlink />
					</Suspense>
				</Canvas>
			</View>
			<TouchableOpacity style={styles.button}>
				<Text style={styles.textButton}>Continue</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "black",
	},
	textTitle: {
		color: "white",
		fontSize: 24,
		textAlign: "center",
		fontWeight: "700",
	},
	text: {
		color: "white",
		fontSize: 14,
		textAlign: "center",
		fontWeight: "300",
	},
	textContainer: {
		gap: 10,
		marginVertical: 20,
	},
	button: {
		backgroundColor: "white",
		padding: 14,
		margin: 20,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 8,
	},
	textButton: {
		fontWeight: "700",
		color: "black",
		fontSize: 14,
	},
	modelContainer: {
		flex: 1,
	},
});
