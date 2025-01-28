import React, { useMemo, useState } from "react";
import { Text, StyleSheet, View, TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation hook from React Navigation
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const PropComp = ({
  buttonText,
  propTop,
  propLeft,
  propBackgroundColor,
  propBorderColor,
  propBorderWidth,
  propWidth,
  onPress,
  navigationDestination,
}) => {
  const navigation = useNavigation(); // Initialize navigation object

  const [isPressed, setIsPressed] = useState(false);

  const property1Variant21Style = useMemo(() => {
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
  };

  return (
    <TouchableWithoutFeedback onPressIn={onPress} onPressOut={handlePressOut}>
      <View style={[styles.property1variant2, property1Variant21Style]}>
        <Text style={styles.back}>{buttonText}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  back: {
    fontSize: FontSize.size_5xl,
    fontWeight: "800",
    fontFamily: FontFamily.poppinsExtraBold,
    color: Color.colorWhite,
    textAlign: "center",
  },
  property1variant2: {
    position: "absolute",
    top: 86,
    left: 18,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorDarkorange_100,
    borderStyle: "solid",
    borderColor: Color.colorWhite,
    borderWidth: 2,
    width: 362,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_50xl,
    paddingVertical: Padding.p_7xs,
  },
});

export default PropComp;