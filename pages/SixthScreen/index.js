import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Switch,
  StatusBar,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";

const SixthScreen = () => {
  const [textInputData, setTextInputData] = useState("");
  const [isEnabled, setIsEnabled] = useState(false);
  const [statusBar, setStatusBar] = useState(false);

  const data = 1;
  console.log("data", data);

  console.log("first", textInputData.length);

  // const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  // console.log("isEnabled", isEnabled);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          borderWidth: 1,
          flexDirection: "row",
          alignItems: "center",
          borderColor: "#000",
          marginHorizontal: 20,
          padding: 15,
          borderRadius: 5,
          height: 70,
          marginVertical: 10,
        }}
      >
        <Ionicons name="mail-open-outline" size={30} />
        <TextInput
          style={{ paddingHorizontal: 10, flex: 1 }}
          autoCapitalize="none"
          autoComplete="email"
          autoCorrect={true}
          autoFocus={false}
          onChangeText={(r3) => {
            console.log(r3);
            setTextInputData(r3);
          }}
          value={`${textInputData}`}
          editable={true}
          keyboardAppearance="light"
          // maxLength={10}
          keyboardType="email-address"
          // multiline={true}
          // numberOfLines={5}
          placeholder="Enter email"
          // textAlign="right"
          // selection={{ start: textInputData.length, end: textInputData.length }}
        />
        <TouchableOpacity
          onPress={() => {
            setTextInputData("");
          }}
        >
          <Ionicons name="close-outline" size={30} />
        </TouchableOpacity>
      </View>

      <Switch
        trackColor={{ false: "grey", true: "green" }}
        thumbColor={isEnabled ? "yellow" : "red"}
        // ios_backgroundColor="yellow"
        onValueChange={(e) => {
          console.log(e);
          setIsEnabled(e);
          // setIsEnabled(!isEnabled);
          setStatusBar(!statusBar);
        }}
        value={isEnabled}
      />
      <StatusBar backgroundColor={"red"} hidden={statusBar} />

      <Text style={{ color: "red" }}>{isEnabled}</Text>

      <Text>Display text</Text>
      <Text>{textInputData}</Text>
    </SafeAreaView>
  );
};

export default SixthScreen;