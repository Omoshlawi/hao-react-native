import { useState } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import AppCard from "./app/components/AppCard";
import AppIcon from "./app/components/AppIcon";
import AppPicker from "./app/components/AppPicker";
import AppSafeAreaScreen from "./app/components/AppSafeAreaScreen";
import AppTextInput from "./app/components/AppTextInput";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import LoginScreen from "./app/screens/LoginScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import PropertyDetailScreen from "./app/screens/PropertyDetailScreen";
import PropertyListScreen from "./app/screens/PropertyListScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import colors from "./app/utils/colors";

const cats = [
  { label: "Furniture", value: 1 },
  { label: "Utensils", value: 2 },
  { label: "Stationary", value: 3 },
  { label: "Stupida", value: 4 },
];

export default function App() {
  const [cartegory, setCategory] = useState();
  return <WelcomeScreen />;
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    backgroundColor: colors.grey,
    padding: 20,
  },
});
