import { useEffect, useState } from "react";
import { StyleSheet, Text, View, StatusBar, Button, Image } from "react-native";
import AppCard from "./app/components/AppCard";
import AppIcon from "./app/components/AppIcon";
import AppPicker from "./app/components/AppPicker";
import AppSafeAreaScreen from "./app/components/AppSafeAreaScreen";
import AppTextInput from "./app/components/AppTextInput";
import { AppErrorMessage } from "./app/components/forms";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import LoginScreen from "./app/screens/LoginScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import NortificationScreen from "./app/screens/NortificationScreen";
import PropertyDetailScreen from "./app/screens/PropertyDetailScreen";
import PropertyEditingScreen from "./app/screens/PropertyEditingScreen";
import PropertyListScreen from "./app/screens/PropertyListScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import colors from "./app/utils/colors";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

export default function App() {
  const [imgUri, setImgUri] = useState();
  const askUserPermision = async () => {
    // const resullt = await ImagePicker.requestMediaLibraryPermissionsAsync()
    // const resullt = await ImagePicker.requestCameraPermissionsAsync();

    // Can take multiple permisions or 1
    const result = await Permissions.askAsync(
      Permissions.MEDIA_LIBRARY
    );
    console.log(result);
    if (!result.granted)
      alert(
        "Access to Camera permisions Denied, please Grant permision to Continue"
      );
  };
  const selectImage = async () => {
    const perm = await ImagePicker.getCameraPermissionsAsync();
    if (perm.granted) {
      try {
        // const res = await ImagePicker.launchImageLibraryAsync();
        const res = await ImagePicker.launchImageLibraryAsync();
        if (!res.canceled) {
          console.log(res);
          // const uri = `data:image/jpeg;${res.assets[0].base64}`;
          setImgUri(res.assets[0].uri);
        }
      } catch (error) {
        alert(error);
      }
    } else {
      await askUserPermision();
    }
  };
  useEffect(() => {
    // askUserPermision();
  }, []);
  return (
    <AppSafeAreaScreen>
      <Button title="Add Image" onPress={selectImage} />
      <View style={{ flex: 1 }}>
        <Image
          source={{ uri: imgUri }}
          resizeMode="contain"
          style={{ width: "100%", height: "100%" }}
        />
      </View>
    </AppSafeAreaScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    backgroundColor: colors.grey,
    padding: 20,
  },
});
