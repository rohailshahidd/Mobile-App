import React, { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property1Group = ({
  abc,
  propTop,
  propLeft,
  propElevation,
  propBackgroundColor,
  propBorderStyle,
  propBorderColor,
  propBorderWidth,
}) => {
  const property1Group14Style = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("left", propLeft),
    };
  }, [propTop, propLeft]);

  const rectangleView2Style = useMemo(() => {
    return {
      ...getStyleValue("elevation", propElevation),
      ...getStyleValue("backgroundColor", propBackgroundColor),
      ...getStyleValue("borderStyle", propBorderStyle),
      ...getStyleValue("borderColor", propBorderColor),
      ...getStyleValue("borderWidth", propBorderWidth),
    };
  }, [
    propElevation,
    propBackgroundColor,
    propBorderStyle,
    propBorderColor,
    propBorderWidth,
  ]);

  return (
    <View style={[styles.property1group14, property1Group14Style]}>
      <View style={[styles.property1group14Child, rectangleView2Style]} />
      <Text style={styles.abc}>{abc}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  property1group14Child: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorSaddlebrown,
    borderStyle: "solid",
    borderColor: Color.colorWhite,
    borderWidth: 3,
    position: "absolute",
  },
  abc: {
    height: "24.37%",
    width: "91.86%",
    top: "34.45%",
    left: "4.65%",
    fontSize: FontSize.size_xl,
    fontWeight: "800",
    fontFamily: FontFamily.poppinsExtraBold,
    color: Color.colorBlack,
    textAlign: "center",
    position: "absolute",
  },
  property1group14: {
    top: 170,
    left: 20,
    width: 172,
    height: 119,
    position: "absolute",
  },
});

export default Property1Group;
