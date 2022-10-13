import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ExpoDocuments = () => {
  const [error, setError] = useState("");
  const getValue = async () => {
    console.log("1");
    AsyncStorage.getItem("name")
      .then((res) => {
        console.log("3");
      })
      .catch((err) => {});

    console.log("2");
  };
  useEffect(() => {
    getValue()
      .then((res) => {})
      .catch((err) => {});
  }, []);

  useEffect(() => {
    fetch("https://api.ohmwholesales.com/api/orders/undefined")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {}
      )
      .catch((err) => {
        console.log(err);
        setError(err?.error?.message);
      });
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TouchableOpacity
        onPress={async () => {
          await AsyncStorage.setItem("name", "123");
        }}
      >
        <Text>Save to local Storage</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={async () => {
          await AsyncStorage.removeItem("name");
        }}
      >
        <Text>Delete from local Storage</Text>
      </TouchableOpacity>
      <Text>{error}</Text>
    </SafeAreaView>
  );
};

export default ExpoDocuments;
