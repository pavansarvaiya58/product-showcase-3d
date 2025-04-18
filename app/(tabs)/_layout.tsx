import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
	const colorScheme = useColorScheme();

	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
				headerShown: false,
			}}>
			<Tabs.Screen
				name="index"
				options={{
					title: "Starlink",
					tabBarIcon: ({ color, focused }) => (
						<TabBarIcon
							name={focused ? "wifi-strength-3" : "wifi-strength-3"}
							color={color}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="explore"
				options={{
					title: "Nike",
					tabBarIcon: ({ color, focused }) => (
						<TabBarIcon
							name={focused ? "shoe-sneaker" : "shoe-sneaker"}
							color={color}
						/>
					),
				}}
			/>
		</Tabs>
	);
}
