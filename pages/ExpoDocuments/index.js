import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Linking,
  StyleSheet,
  Dimensions,
} from "react-native";
import * as Sharing from "expo-sharing";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as ImagePicker from "expo-image-picker";
import { LinearGradient } from "expo-linear-gradient";
import MapView from "react-native-maps";
import NetInfo from "@react-native-community/netinfo";
const ExpoDocuments = () => {
  const [error, setError] = useState("");
  const getValue = async () => {
    console.log(1);
    const res = await AsyncStorage.getItem("name1");
    console.log(res);
    console.log(3);
  };
  const [image, setImage] = useState([]);
  useEffect(() => {
    getValue();
  }, []);
  const [netinfo, setNetinfo] = useState(false);
  NetInfo.fetch().then((state) => {
    setNetinfo(state.isConnected);
    console.log("Connection type", state.type);
    console.log("Is connected?", state.isConnected);
  });
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    // let result = await ImagePicker.launchCameraAsync({
    //   mediaTypes: ImagePicker.MediaTypeOptions.All,
    //   allowsEditing: true,
    //   aspect: [4, 3],
    //   quality: 1,
    // });

    console.log(result);

    if (result.cancelled === false) {
      // setImage((prev) => [...prev, result.uri]);
      setImage([...image, result?.uri]);
    }
  };
  console.log(image);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TouchableOpacity
        onPress={async () => {
          await AsyncStorage.setItem("name1", "12355544");
        }}
      >
        <Text>Save to local Storage</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={async () => {
          await AsyncStorage.removeItem("name1");
        }}
      >
        <Text>Delete from local Storage</Text>
      </TouchableOpacity>
      <Text>{error}</Text>

      <TouchableOpacity
        onPress={() => {
          pickImage();
        }}
      >
        <Text>Upload image</Text>
      </TouchableOpacity>
      {image?.map((item) => {
        return (
          <Image
            key={item}
            source={{ uri: item }}
            style={{ width: 100, height: 100 }}
          />
        );
      })}
      <LinearGradient
        // Button Linear Gradient
        colors={["red", "#fff", "#000"]}
        style={styles.lg}
        start={[0.12, 3.3]}
        end={[1.0, 1.1]}
        location={[0.4, 0.8]}
      >
        <Text>Sign in with Facebook</Text>
      </LinearGradient>
      <TouchableOpacity
        onPress={() => {
          // Linking.openURL(
          //   "https://docs.expo.dev/versions/v46.0.0/sdk/linking/"
          // );
          Sharing.shareAsync("sss", {
            mimeType: "", // Android
            dialogTitle: "", // Android and Web
            UTI: "", // iOS
          });
        }}
      >
        <Text>Link</Text>
      </TouchableOpacity>
      <Text>{netinfo === true ? "Online" : "offline"}</Text>
      {/* <MapView style={styles.map} /> */}
    </SafeAreaView>
  );
};

export default ExpoDocuments;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  lg: {
    paddingVertical: 40,
  },
});
