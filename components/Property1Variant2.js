import React, { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property1Variant2 = ({
  propTop,
  propLeft,
  propElevation,
  propBackgroundColor,
  propColor,
}) => {
  const property1Variant21Style = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("left", propLeft),
      ...getStyleValue("elevation", propElevation),
    };
  }, [propTop, propLeft, propElevation]);

  const rectangleView1Style = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", propBackgroundColor),
    };
  }, [propBackgroundColor]);

  const addDetailStyle = useMemo(() => {
    return {
      ...getStyleValue("color", propColor),
    };
  }, [propColor]);

  return (
    <View style={[styles.property1variant2, property1Variant21Style]}>
      <View style={[styles.property1variant2Child, rectangleView1Style]} />
      <Text style={[styles.addDetail, addDetailStyle]}>Add Detail</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  property1variant2Child: {
    height: "109.3%",
    width: "102.19%",
    top: "-4.65%",
    right: "-1.09%",
    bottom: "-4.65%",
    left: "-1.09%",
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorRoyalblue,
    borderStyle: "solid",
    borderColor: Color.colorDarkorange_300,
    borderWidth: 2,
    position: "absolute",
  },
  addDetail: {
    top: "18.6%",
    left: "22.4%",
    fontSize: FontSize.size_xl,
    lineHeight: 26,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorSeashell,
    textAlign: "left",
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
    position: "absolute",
  },
  property1variant2: {
    top: 83,
    left: 20,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 183,
    height: 43,
    position: "absolute",
  },
});

export default Property1Variant2;
