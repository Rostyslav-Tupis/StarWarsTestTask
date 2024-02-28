import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {MAIN_SCREENS} from "./MainScreensName";
import {AdditionInfo} from "@/components/AdditionInfo/AdditionInfo";
import {GeneralList} from "@/components/GeneralList/GeneralList";
import {NavigationContainer} from "@react-navigation/native";

const Stack = createStackNavigator();

export const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={MAIN_SCREENS.GENERAL_LIST}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name={MAIN_SCREENS.GENERAL_LIST}
          component={GeneralList}
        />
        <Stack.Screen
          name={MAIN_SCREENS.ADDITIONAL_INFO}
          component={AdditionInfo}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
