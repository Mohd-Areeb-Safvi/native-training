import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StackActions } from "@react-navigation/native";

const Calculator = ({ a, b, c }) => {
  const calc = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const [value, setValue] = useState([]);
  const [addition, setAddition] = useState("");
  const [total, setTotal] = useState(0);
  const [calculate, setCalculate] = useState(false);

  // console.log(value, addition, "value");

  // useEffect(() => {
  //   if (!!value === true) {
  //   }
  // }, [value]);
  useEffect(() => {
    if (calculate === true) {
      const calculateData = value
        ?.filter((item) => item !== "+")
        ?.reduce((prev, curr) => {
          return prev + curr;
        }, 0);
      setTotal(300);
    } else {
      setTotal(200);
    }
  }, [calculate]);

  // console.log("calculate", !false);
  const popAction = StackActions.pop(4);

  return (
    <SafeAreaView style={{ flex: 1, marginHorizontal: 20 }}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Ionicons name="arrow-back-outline" size={30} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.dispatch(popAction);
        }}
      >
        <Text>POP</Text>
      </TouchableOpacity>

      <View
        style={{
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {/* <Text style={{ width: "50%" }}>asdasd</Text>
        <Text style={{ width: "50%" }}>asdasd</Text>
        <Text style={{ width: "50%", backgroundColor: "red" }}>asdasd</Text> */}
        {calc?.map((item) => {
          return (
            <TouchableOpacity
              key={item}
              onPress={() => {
                // setValue((prev) => [...prev, item]);
                // setValue([...value, item]);
              }}
              style={{
                width: "30%",
                padding: 30,
                backgroundColor: "skyblue",
                margin: 5,
              }}
            >
              <Text style={{ textAlign: "center" }}>{item}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <Text>Selected Values :</Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {value?.map((item, index) => {
          return (
            <View key={index}>
              <Text>{item}</Text>
            </View>
          );
        })}
      </View>

      <TouchableOpacity
        onPress={() => {
          setValue((prev) => [...prev, "+"]);
        }}
      >
        <Ionicons name="add-outline" size={32} color="black" />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: "red",
          padding: 10,
          width: 100,
          borderRadius: 10,
        }}
        onPress={() => {
          setCalculate(!calculate);
        }}
      >
        <Text style={{ color: "#fff", textAlign: "center" }}>Calculate</Text>
      </TouchableOpacity>
      <Text>Total: {total}</Text>
    </SafeAreaView>
  );
};

export default Calculator;
