import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  useColorScheme,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import Navigation from "./navigation";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const [theme, setTheme] = useState("light");

  const themeSet = async () => {
    const data = await AsyncStorage.getItem("theme");

    console.log(data, "data");
    if (data !== null) setTheme(data);
  };
  console.log(theme);
  useEffect(() => {
    themeSet();
  }, []);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: theme === "light" ? "#fff" : "#000",
        }}
      >
        <Text style={{ color: theme === "light" ? "#000" : "#fff" }}>
          asdasdasd
        </Text>
        <StatusBar />
        <TouchableOpacity
          onPress={async () => {
            if (theme === "light") {
              setTheme("dark");
              await AsyncStorage.setItem("theme", "dark");
            } else if (theme === "dark") {
              setTheme("light");
              await AsyncStorage.setItem("theme", "light");
            } else {
              console.log("nodata");
            }
          }}
        >
          <Text style={{ color: theme === "light" ? "#000" : "#fff" }}>
            theme
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}
