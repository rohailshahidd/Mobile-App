import React, { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Border, Color, Padding, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property1Variant1 = ({
  reset,
  propTop,
  propLeft,
  propElevation,
  propHeight,
  propWidth,
  propPosition,
  propMarginTop,
  propBackgroundColor,
  propBorderColor,
  propBorderWidth,
  propWidth1,
  propHeight1,
  propHeight2,
  propWidth2,
  propTop1,
  propLeft1,
  onButoonPress,
}) => {
  const property1Variant2Style = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("left", propLeft),
      ...getStyleValue("elevation", propElevation),
      ...getStyleValue("height", propHeight),
      ...getStyleValue("width", propWidth),
      ...getStyleValue("position", propPosition),
      ...getStyleValue("marginTop", propMarginTop),
    };
  }, [
    propTop,
    propLeft,
    propElevation,
    propHeight,
    propWidth,
    propPosition,
    propMarginTop,
  ]);

  const rectangleView1Style = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", propBackgroundColor),
      ...getStyleValue("borderColor", propBorderColor),
      ...getStyleValue("borderWidth", propBorderWidth),
      ...getStyleValue("width", propWidth1),
      ...getStyleValue("height", propHeight1),
    };
  }, [
    propBackgroundColor,
    propBorderColor,
    propBorderWidth,
    propWidth1,
    propHeight1,
  ]);

  const resetStyle = useMemo(() => {
    return {
      ...getStyleValue("height", propHeight2),
      ...getStyleValue("width", propWidth2),
      ...getStyleValue("top", propTop1),
      ...getStyleValue("left", propLeft1),
    };
  }, [propHeight2, propWidth2, propTop1, propLeft1]);

  return (
    <View
      style={[styles.property1variant2, property1Variant2Style]}
      onPress={onButoonPress}
    >
      <View style={styles.property1variant2Inner}>
        <View style={[styles.frameChild, rectangleView1Style]} />
      </View>
      <Text style={[styles.reset, resetStyle]}>{reset}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  frameChild: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorSaddlebrown,
    borderStyle: "solid",
    borderColor: Color.colorWhite,
    borderWidth: 2,
    width: 362,
    height: 50,
  },
  property1variant2Inner: {
    padding: Padding.p_3xs,
    zIndex: 0,
  },
  reset: {
    height: "72.34%",
    width: "87.3%",
    top: "12.77%",
    left: "6.35%",
    fontSize: FontSize.size_5xl,
    fontWeight: "800",
    fontFamily: FontFamily.poppinsExtraBold,
    color: Color.colorWhite,
    textAlign: "center",
    zIndex: 1,
    position: "absolute",
  },
  property1variant2: {
    top: 106,
    left: 20,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    height: 94,
    position: "absolute",
  },
});

export default Property1Variant1;
