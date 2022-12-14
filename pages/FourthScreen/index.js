import {
  View,
  Text,
  TouchableOpacityBase,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

const FourthScreen = ({ navigation }) => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const [arrayData, setArrayData] = useState("");

  const [variableName, setVariableName] = useState(0);
  console.log("variableName", variableName);

  const array2 = [
    {
      id: 1,
      name: "areeb",
      phoneno: 38741232,
      price: 30,
      quantity: 3,
    },
    {
      id: 2,
      name: "safvi",
      phoneno: 234234234,
      price: 40,
      quantity: 3,
    },
    {
      id: 3,
      name: "areeb1",
      phoneno: 38741232,
      price: 50,
      quantity: 3,
    },
    {
      id: 4,
      name: "Native",
      phoneno: 234234234,
      price: 60,
      quantity: 3,
    },
  ];

  const data = array2.reduce((prev, curr) => {
    console.log(prev, curr.price * curr.quantity);
    return prev + curr.price * curr.quantity;
  }, 0);

  const updateData = (item) => {
    // setArrayData("areeb");
    // console.log(item);
    setArrayData(item);
    setVariableName(variableName + 1);
  };

  const deleteData = () => {
    setArrayData("");
    setVariableName(0);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TouchableOpacity
        onPress={() => {
          navigation.openDrawer();
        }}
      >
        <Ionicons name="menu" size={30} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Ionicons name="arrow-back-outline" size={30} />
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          marginVertical: 10,
          backgroundColor: "yellow",
          paddingVertical: 10,
        }}
        onPress={() => {
          navigation.navigate("FlatList");
        }}
      >
        <Text>FlatList1111</Text>
      </TouchableOpacity>

      <View style={{}}>
        {array2?.map((item) => {
          return (
            <View
              key={item.id}
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 10,
              }}
            >
              <Text style={{ marginHorizontal: 10 }}>{item?.name}</Text>
              {/* <Text style={{ marginHorizontal: 10 }}>{item?.phoneno}</Text> */}
              <TouchableOpacity
                style={{
                  backgroundColor: "skyblue",
                  padding: 4,
                  borderRadius: 10,
                }}
                onPress={() => {
                  updateData(item);
                }}
              >
                <Text>Get User Data</Text>
              </TouchableOpacity>
            </View>
          );
        })}
        <TouchableOpacity
          style={{
            backgroundColor: "green",
            padding: 4,
            borderRadius: 10,
            marginLeft: 10,
            marginVertical: 30,
          }}
          onPress={() => {
            deleteData();
          }}
        >
          <Text style={{ color: "#fff" }}>Delete User Data</Text>
        </TouchableOpacity>
        <Text style={{ marginLeft: 10 }}>Display user details :</Text>
        <Text style={{ marginHorizontal: 10 }}>
          name :{arrayData.name || "--"}
        </Text>
        <Text style={{ marginHorizontal: 10 }}>id: {arrayData.id || "--"}</Text>
        <Text style={{ marginHorizontal: 10 }}>
          phoneno:{arrayData.phoneno || "--"}
        </Text>
        <Text style={{ marginHorizontal: 10 }}>
          quantity :{arrayData.quantity || "--"}
        </Text>
        <Text style={{ marginHorizontal: 10 }}>variable :{variableName}</Text>
      </View>
    </SafeAreaView>
  );
};

export default FourthScreen;
