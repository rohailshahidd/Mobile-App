import React, { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property1Component3 = ({
  property1Component1Position,
  property1Component1Width,
  property1Component1Height,
  property1Component1Top,
  property1Component1Left,
  rectangleViewPosition,
  rectangleViewHeight,
  rectangleViewWidth,
  rectangleViewTop,
  rectangleViewRight,
  rectangleViewBottom,
  rectangleViewLeft,
  rectangleViewBorderRadius,
  rectangleViewBackgroundColor,
}) => {
  const property1Component11Style = useMemo(() => {
    return {
      ...getStyleValue("position", property1Component1Position),
      ...getStyleValue("width", property1Component1Width),
      ...getStyleValue("height", property1Component1Height),
      ...getStyleValue("top", property1Component1Top),
      ...getStyleValue("left", property1Component1Left),
    };
  }, [
    property1Component1Position,
    property1Component1Width,
    property1Component1Height,
    property1Component1Top,
    property1Component1Left,
  ]);

  const rectangleView1Style = useMemo(() => {
    return {
      ...getStyleValue("position", rectangleViewPosition),
      ...getStyleValue("height", rectangleViewHeight),
      ...getStyleValue("width", rectangleViewWidth),
      ...getStyleValue("top", rectangleViewTop),
      ...getStyleValue("right", rectangleViewRight),
      ...getStyleValue("bottom", rectangleViewBottom),
      ...getStyleValue("left", rectangleViewLeft),
      ...getStyleValue("borderRadius", rectangleViewBorderRadius),
      ...getStyleValue("backgroundColor", rectangleViewBackgroundColor),
    };
  }, [
    rectangleViewPosition,
    rectangleViewHeight,
    rectangleViewWidth,
    rectangleViewTop,
    rectangleViewRight,
    rectangleViewBottom,
    rectangleViewLeft,
    rectangleViewBorderRadius,
    rectangleViewBackgroundColor,
  ]);

  return (
    <View style={[styles.property1component1, property1Component11Style]}>
      <View style={[styles.property1component1Child, rectangleView1Style]} />
      <Text style={styles.serviceType}>Service Type</Text>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector3.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  property1component1Child: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorGainsboro,
    position: "absolute",
  },
  serviceType: {
    height: "27.94%",
    width: "32.29%",
    top: "36.76%",
    left: "5.43%",
    fontSize: FontSize.size_mini,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  vectorIcon: {
    height: "14.85%",
    width: "4.46%",
    top: "43.09%",
    right: "10.97%",
    bottom: "42.06%",
    left: "84.57%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  property1component1: {
    borderRadius: Border.br_xl,
    width: 350,
    height: 68,
  },
});

export default Property1Component3;
