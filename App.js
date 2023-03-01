import { StyleSheet, Text, View, StatusBar } from "react-native";
import AppCard from "./app/components/AppCard";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import colors from "./app/utils/colors";

export default function App() {
  return (
    <View style={styles.container}>
      <AppCard
        title="Black Jacket"
        subTitle="$20"
        image={require("./app/assets/logoBlack.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:StatusBar.currentHeight,
    backgroundColor: colors.grey,
    padding:20
  },
});
