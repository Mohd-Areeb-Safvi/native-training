import { Ionicons } from "@expo/vector-icons";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import {
  Image,
  Linking,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

function CustomDrawerContent({ navigation }) {
  return (
    <SafeAreaView style={{ marginTop: 40, flex: 1 }}>
      {/* <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Image
          source={{
            uri: "data:image/jpeg;base64,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",
          }}
          style={{
            width: 80,
            height: 80,
            resizeMode: "cover",
            borderRadius: 40,
          }}
        />
        <TouchableOpacity
          onPress={() => {
            navigation.closeDrawer();
          }}
        >
          <Ionicons name="close-circle" size={30} color="green" />
        </TouchableOpacity>
      </View> */}
      <ScrollView>
        <DrawerItem
          focused={false}
          drawerLabel={<Ionicons name="add" />}
          activeTintColor="red"
          inactiveTintColor="green"
          label="Help1"
          labelStyle={{ fontSize: 29 }}
          style={{ backgroundColor: "yellow" }}
          onPress={() => Linking.openURL("https://mywebsite.com/help")}
        />

        <TouchableOpacity
          style={{
            marginVertical: 10,
            backgroundColor: "skyblue",
            paddingVertical: 10,
          }}
          onPress={() => {
            navigation.navigate("FlatList");
          }}
        >
          <Text style={{ paddingLeft: 20 }}>Flatlist</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginVertical: 10,
            backgroundColor: "skyblue",
            paddingVertical: 10,
          }}
          onPress={() => {
            navigation.navigate("Fourth");
          }}
        >
          <Text style={{ paddingLeft: 20 }}>FourthScreen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginVertical: 10,
            backgroundColor: "skyblue",
            paddingVertical: 10,
          }}
          onPress={() => {
            navigation.navigate("IssuesScreen");
          }}
        >
          <Text style={{ paddingLeft: 20 }}>IssuesScreen</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

export default CustomDrawerContent;
