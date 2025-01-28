import React, { useMemo, useState } from "react";
import { Text, StyleSheet, View, TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation hook from React Navigation
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const Newcomponent1 = ({
  buttonText,
  propTop,
  propLeft,
  propBackgroundColor,
  propBorderColor,
  propBorderWidth,
  propWidth,
  navigationDestination,
}) => {
  const navigation = useNavigation(); // Initialize navigation object

  const [isPressed, setIsPressed] = useState(false);

  const newComponent1Style = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("left", propLeft),
      ...getStyleValue("backgroundColor", propBackgroundColor),
      ...getStyleValue("borderColor", propBorderColor),
      ...getStyleValue("borderWidth", propBorderWidth),
      ...getStyleValue("width", propWidth),
      backgroundColor: isPressed ? Color.colorSaddlebrown : propBackgroundColor, // Update background color when pressed
    };
  }, [
    propTop,
    propLeft,
    propBackgroundColor,
    propBorderColor,
    propBorderWidth,
    propWidth,
    isPressed,
  ]);

  const handlePressIn = () => {
    setIsPressed(true); // Set isPressed to true when pressed
  };

  const handlePressOut = () => {
    setIsPressed(false);
    navigation.navigate(navigationDestination);
  };

  return (
    <TouchableWithoutFeedback onPressIn={handlePressIn} onPressOut={handlePressOut}>
      <View style={[styles.newComponent1, newComponent1Style]}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    fontSize: FontSize.size_5xl,
    fontWeight: "800",
    fontFamily: FontFamily.poppinsExtraBold,
    color: Color.colorWhite,
    textAlign: "center",
  },
  newComponent1: {
    position: "absolute",
    borderRadius: Border.br_xl,
    borderStyle: "solid",
    borderWidth: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_50xl,
    paddingVertical: Padding.p_7xs,
  },
});

export default Newcomponent1;
