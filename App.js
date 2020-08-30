import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./src/screens/LoginScreen";
import { createSwitchNavigator } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import CarListScreen from "./src/screens/CarList";
import DefaultScreen from "./src/screens/DefaultScreen";
// const DefaultScreen = (props) => {
//   return <CarListScreen></CarListScreen>;
// };

const carStackNavigator = createStackNavigator(
  {
    CarList: CarListScreen,
    CarDetail: DefaultScreen,
  },
  {
    initialRouteName: "CarList",
  }
);
const settingNavigator = createStackNavigator(
  {
    SettingList: DefaultScreen,
    EditInfo: DefaultScreen,
  },
  {
    initialRouteName: "SettingList",
  }
);

const TabNavigator = createBottomTabNavigator(
  {
    Car: carStackNavigator,
    Setting: settingNavigator,
  },
  {
    initialRouteName: "Car",
  }
);
const AppNavigator = createSwitchNavigator({
  Main: TabNavigator,
  Login: LoginScreen,
});

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;

// const AppNavigator = createStackNavigator(
//   {
//     SampleHome: SampleHomeScreen,
//     SampleDetails: SampleDetailScreen,
//   },
//   {
//     initialRouteName: "SampleHome",
//   }
// );
// const AppContainer = createAppContainer(AppNavigator);
// export default AppContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
