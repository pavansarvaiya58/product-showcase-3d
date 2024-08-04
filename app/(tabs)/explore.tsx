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
import { Spiderman } from "@/components/Spiderman";
import useControls from "r3f-native-orbitcontrols";
import Trigger from "@/components/Trigger";
import Loader from "@/components/Loader";
import Gradient from "@/components/Gradient";
import { NikeShoe } from "@/components/NikeShoe";

const Explore = () => {
	const [OrbitControls, event] = useControls();
	const [loading, setLoading] = useState(false);

	return (
		<SafeAreaView style={styles.container}>
			<StatusBar animated barStyle={"light-content"} />
			<View style={styles.textContainer}>
				<Text style={styles.textTitle}>Nike Shoe</Text>
				<Text style={styles.text}>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem ab
					commodi impedit optio, dignissimos
				</Text>
			</View>
			<View style={styles.modelContainer} {...event}>
				<Gradient tab={2} />
				{loading && <Loader />}
				{/* <Canvas> */}
				<Canvas
					onCreated={(state) => {
						const _gl = state.gl.getContext();
						const pixelStorei = _gl.pixelStorei.bind(_gl);
						_gl.pixelStorei = function (...args) {
							const [parameter] = args;
							switch (parameter) {
								case _gl.UNPACK_FLIP_Y_WEBGL:
									return pixelStorei(...args);
							}
						};
					}}>
					<OrbitControls />
					<directionalLight position={[1, 0, 0]} args={["white", 2]} />
					<directionalLight position={[-1, 0, 0]} args={["white", 2]} />
					<directionalLight position={[0, 0, 1]} args={["white", 2]} />
					<directionalLight position={[0, 0, -1]} args={["white", 2]} />
					<directionalLight position={[0, 1, 0]} args={["white", 15]} />
					<directionalLight position={[0, -1, 0]} args={["white", 2]} />
					<Suspense fallback={<Trigger setLoading={setLoading} />}>
						<NikeShoe />
					</Suspense>
				</Canvas>
			</View>
			<TouchableOpacity style={styles.button}>
				<Text style={styles.textButton}>Continue</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
};

export default Explore;

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
