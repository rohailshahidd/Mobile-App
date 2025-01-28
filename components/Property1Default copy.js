import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property1Default = ({
  buttonText,
  property1DefaultPosition,
  property1DefaultTop,
  property1DefaultLeft,
  property1DefaultWidth,
  backFlex,
}) => {
  const property1DefaultStyle = useMemo(() => {
    return {
      ...getStyleValue("position", property1DefaultPosition),
      ...getStyleValue("top", property1DefaultTop),
      ...getStyleValue("left", property1DefaultLeft),
      ...getStyleValue("width", property1DefaultWidth),
    };
  }, [
    property1DefaultPosition,
    property1DefaultTop,
    property1DefaultLeft,
    property1DefaultWidth,
  ]);

  const backStyle = useMemo(() => {
    return {
      ...getStyleValue("flex", backFlex),
    };
  }, [backFlex]);

  return (
    <View style={[styles.property1default, property1DefaultStyle]}>
      <Text style={[styles.back, backStyle]}>{buttonText}</Text>
    </View>
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
  property1default: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorDarkorange_100,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    width: 360,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_50xl,
    paddingVertical: Padding.p_7xs,
  },
});

export default Property1Default;
