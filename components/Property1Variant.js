import React, { useMemo } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const Property1Variant = ({
  propTop,
  propLeft,
  propBackgroundColor,
  propColor,
  onPress, // Add this line
}) => {
  const property1Variant2Style = useMemo(() => ({
    ...getStyleValue("top", propTop),
    ...getStyleValue("left", propLeft),
  }), [propTop, propLeft]);

  const rectangleViewStyle = useMemo(() => ({
    ...getStyleValue("backgroundColor", propBackgroundColor),
  }), [propBackgroundColor]);

  const enterStyle = useMemo(() => ({
    ...getStyleValue("color", propColor),
  }), [propColor]);

  return (
    <TouchableOpacity style={[styles.property1variant2, property1Variant2Style]} onPress={onPress}>
      <View style={[styles.property1variant2Child, rectangleViewStyle]} />
      <Text style={[styles.enter, enterStyle]}>Enter</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  property1variant2Child: {
    height: "100%",
    width: "100%",
    position: "absolute",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
    elevation: 4,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorRoyalblue,
  },
  enter: {
    width: "40.2%",
    top: "22.73%",
    left: "29.73%",
    fontSize: FontSize.size_xl,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorWhite,
    textAlign: "center",
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
    position: "absolute",
  },
  property1variant2: {
    top: 86,
    left: 20,
    width: 148,
    height: 44,
    position: "absolute",
  },
});

export default Property1Variant;
