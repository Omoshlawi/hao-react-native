import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useContext } from "react";
import UserContext from "../context/UserContext";
import colors from "../utils/colors";
import AuthStackNavigator from "./AuthStackNavigator";
import BottomTabNavigator from "./BottomTabNavigator";
import PropertiesStackNavigator from "./PropertiesStackNavigator";
import routes from "./routes";
import UserStackNavigation from "./UserStackNavigation";
import ViewImageScreen from "../screens/ViewImageScreen";
import HousesStackNavigator from "./HousesStackNavigator";

const Stack = createNativeStackNavigator();
const Navigator = Stack.Navigator;
const Screen = Stack.Screen;

function MainStackNavigator(props) {
  const { token } = useContext(UserContext);
  const isLoggedIn = Boolean(token);
  return (
    <Navigator screenOptions={{ headerTintColor: colors.primary }}>
      {isLoggedIn ? (
        <Screen
          name={routes.TABS}
          component={BottomTabNavigator}
          options={{ headerShown: false }}
        />
      ) : (
        <Screen
          name={routes.AUTH}
          component={AuthStackNavigator}
          options={{ headerShown: false }}
        />
      )}
      <Screen
        name={routes.PROPERTY_NAV}
        component={PropertiesStackNavigator}
        options={{ headerShown: false }}
        scre
      />
      <Screen
        name={routes.USER_NAV}
        component={UserStackNavigation}
        options={{ headerShown: false }}
        scre
      />
      <Screen
        name={routes.HOUSES_NAV}
        component={HousesStackNavigator}
        options={{ headerShown: false }}
        scre
      />
      <Screen
        name={routes.IMAGE_VIEW}
        component={ViewImageScreen}
        options={{ headerShown: false }}
        scre
      />
    </Navigator>
  );
}

MainStackNavigator.propTypes = {};

export default MainStackNavigator;
