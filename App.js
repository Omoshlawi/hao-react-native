import { useEffect, useState } from "react";
import { StyleSheet, Text, View, StatusBar, Button, Image } from "react-native";
import AppCard from "./app/components/AppCard";
import AppIcon from "./app/components/AppIcon";
import AppPicker from "./app/components/AppPicker";
import AppSafeAreaScreen from "./app/components/AppSafeAreaScreen";
import AppTextInput from "./app/components/AppTextInput";
import { AppErrorMessage } from "./app/components/forms";
import ImageInput from "./app/components/input/ImageInput";
import ImagePicker from "./app/components/imagePicker/ImagePicker";
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

export default function App() {
  const [localImage, setlocalImage] = useState();
  return (
    <AppSafeAreaScreen>
      <ImageInput
        onImageChange={(image) => setlocalImage(image)}
        localImage={localImage}
        radiusScaleFactor={0.2}
      />
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
