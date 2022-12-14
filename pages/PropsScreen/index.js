import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  TouchableOpacityBase,
} from "react-native";
import React, { useState, useEffect } from "react";
import MiniProps from "./MiniProps";
import { Picker } from "@react-native-picker/picker";
import IssuesScreen from "../IssuesScreen";
import { useNavigation } from "@react-navigation/native";
import DropDownPicker from "react-native-dropdown-picker";
import { TextInput } from "react-native-gesture-handler";
import Calculator from "../Calculator";
const PropsScreen = ({ navigation }) => {
  // const navigation = useNavigation();
  const [native, setNative] = useState("native1");
  const [selectedValue, setSelectedValue] = useState("java1");
  const [native2, setNative2] = useState("native1");
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState([]);
  const [items, setItems] = useState([
    { id: 1, label: "Apple", value: "apple2" },
    { id: 2, label: "Banana3", value: "banana3" },
    { id: 3, label: "Apple2", value: "apple5" },
    { id: 4, label: "Banana3", value: "banana6" },
  ]);

  const array = [
    {
      id: 1, //0
    },
    {
      id: 2, //1
    },
    {
      id: 3, //2
    },
    {
      id: 4, //3
    },
    {
      id: 5, //4
    },
    {
      id: 6, //5
    },
  ];

  const newArray = array?.filter((item) => item.id !== 2);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Sixth");
        }}
      >
        <Text>Sixth</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Fourth");
        }}
      >
        <Text>Fourth</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("FlatList", {
            data: items,
            data2: array,
            string: "native class",
            number: 2,
          });
        }}
      >
        <Text>FlatList</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("FlatList");
        }}
      >
        <Text>FlatList without props</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Calculators");
        }}
      >
        <Text>Calculator</Text>
      </TouchableOpacity>
      <View style={{ marginVertical: 30 }}></View>
      {items?.map((item, index) => {
        return (
          <TouchableOpacity
            key={index}
            onPress={() => {
              navigation.navigate("FlatList", { id: item.id });
            }}
          >
            <Text key={index}>{item.label}</Text>
          </TouchableOpacity>
        );
      })}

      {/* <IssuesScreen navigation={navigation} /> */}

      {/* <Calculator name1={items} /> */}

      {/* <View>
        <Text style={{ textAlign: "center", color: "red", fontSize: 18 }}>
          PropsScreen
        </Text>
      </View>
     
      <View style={{ marginTop: 40 }}>
        {items?.map((item, index) => {
          return <Text key={index}>{item.label}</Text>;
        })}
      </View> */}
      {/* <Text>PropsScreen</Text>
      <Text>{native}</Text>
      <TouchableOpacity
        onPress={() => {
          setNative("native2/0");
        }}
        style={{ backgroundColor: "green" }}
      >
        <Text>Update</Text>
      </TouchableOpacity>
      <View style={{ marginVertical: 20 }}>
        <MiniProps native1={native} setNative={setNative} />
      </View> */}
      {/* <Picker
        selectedValue={selectedValue}
        style={{ height: 150, width: 150 }}
        onValueChange={(itemValue, itemIndex) => {
          console.log(itemValue);
          setSelectedValue(itemValue);
        }}
      >
        <Picker.Item label="Java2" value="java1" />
        <Picker.Item label="JavaScript1" value="JavaScript1" />
        <Picker.Item label="JavaScript2" value="JavaScript2" />
        <Picker.Item label="JavaScript3" value="js3" />
        <Picker.Item label="JavaScript4" value="js4" />
        <Picker.Item label="JavaScript5" value="js5" />
      </Picker> */}
      {/* <DropDownPicker
        open={open}
        multiple={true}
        value={value}
        items={items}
        disabled={false}
        // min={0}
        // max={3}
        setOpen={() => {
          setOpen(!open);
        }}
        setValue={(e) => {
          setValue(e);
        }}
        maxHeight={200}
        setItems={setItems}
        // style={{ height: 50, marginTop: 100 }}
      /> */}
      {/* {array
        ?.filter((item) => item.id > 3)
        ?.map((item) => {
          return <Text>{item.id}</Text>;
        })}
      <Text>slice</Text>
      {array?.slice(2, 6)?.map((item) => {
        return <Text>{item.id}</Text>;
      })} */}

      <Text></Text>
    </SafeAreaView>
  );
};

export default PropsScreen;
