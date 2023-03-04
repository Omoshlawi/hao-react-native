import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const Navigator = Tab.Navigator;
const Screen = Tab.Screen;

import React from "react";
import PropTypes from "prop-types";

function TabNavigator(props) {
  return <Navigator></Navigator>;
}

TabNavigator.propTypes = {};

export default TabNavigator;
