import { useEffect, useState } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
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
  const askUserPermision = async () => {
    // const resullt = await ImagePicker.requestMediaLibraryPermissionsAsync()
    // const resullt = await ImagePicker.requestCameraPermissionsAsync();

    // Can take multiple permisions or 1
    const result = await Permissions.askAsync(
      Permissions.MEDIA_LIBRARY,
      Permissions.AUDIO_RECORDING,
      Permissions.NOTIFICATIONS
    );
    console.log(result);
    if (!result.granted) alert("You need allow permision to images");
  };
  useEffect(() => {
    askUserPermision();
  }, []);
  return <AppSafeAreaScreen></AppSafeAreaScreen>;
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    backgroundColor: colors.grey,
    padding: 20,
  },
});
