const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import ForgotPassword from "./screens/ForgotPassword";
import Frame from "./screens/Frame";
import Login from "./screens/Login";
import ForgotPasswordText from "./components/ForgotPasswordText";
import Registration from "./screens/Registration";
import SlashScreen from "./screens/SlashScreen";
import Home from "./screens/Home";
import Edit from "./screens/Edit";
import Profile from "./screens/Profile";
import Butoon from "./components/Butoon";
import Butoon1 from "./components/Butoon1";
import Component1 from "./components/Component1";
import Component2 from "./components/Component2";
import ForgotPassword1 from "./components/ForgotPassword1";
import Vector from "./components/Vector";
import Vector1 from "./components/Vector1";
import Vector2 from "./components/Vector2";
import Vector3 from "./components/Vector3";
import Vector4 from "./components/Vector4";
import Nav3 from "./components/Nav3";
import Component3 from "./components/Component3";
import Property1Group from "./components/Property1Group";
import Frame1 from "./screens/Frame1";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("./assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-Black": require("./assets/fonts/Poppins-Black.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="SlashScreen"
              component={SlashScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Registration"
              component={Registration}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ForgotPassword"
              component={ForgotPassword}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame"
              component={Frame}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Edit"
              component={Edit}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame1"
              component={Frame1}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
