import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property1ButtonHov = ({
  propTop,
  propBackgroundColor,
  propLeft,
  propWidth,
  propColor,
}) => {
  const property1ButtonHovStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("backgroundColor", propBackgroundColor),
      ...getStyleValue("left", propLeft),
      ...getStyleValue("width", propWidth),
    };
  }, [propTop, propBackgroundColor, propLeft, propWidth]);

  const sAVEStyle = useMemo(() => {
    return {
      ...getStyleValue("color", propColor),
    };
  }, [propColor]);

  return (
    <View style={[styles.property1buttonHov, property1ButtonHovStyle]}>
      <Text style={[styles.save, sAVEStyle]}>SAVE</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  save: {
    fontSize: FontSize.size_mini,
    letterSpacing: 1.5,
    fontWeight: "900",
    fontFamily: FontFamily.interBlack,
    color: Color.colorBlack,
    textAlign: "left",
  },
  property1buttonHov: {
    position: "absolute",
    top: 80,
    left: 20,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorDarkorange_100,
    width: 97,
    height: 38,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: Padding.p_4xs,
    paddingTop: Padding.p_2xs,
    paddingRight: Padding.p_3xs,
    paddingBottom: Padding.p_3xs,
  },
});

export default Property1ButtonHov;
