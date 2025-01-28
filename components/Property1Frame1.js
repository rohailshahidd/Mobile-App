import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property1Frame1 = ({
  property1Frame289Position,
  property1Frame289Width,
  property1Frame289Height,
  property1Frame289Top,
  property1Frame289Left,
}) => {
  const property1Frame2891Style = useMemo(() => {
    return {
      ...getStyleValue("position", property1Frame289Position),
      ...getStyleValue("width", property1Frame289Width),
      ...getStyleValue("height", property1Frame289Height),
      ...getStyleValue("top", property1Frame289Top),
      ...getStyleValue("left", property1Frame289Left),
    };
  }, [
    property1Frame289Position,
    property1Frame289Width,
    property1Frame289Height,
    property1Frame289Top,
    property1Frame289Left,
  ]);

  return (
    <View style={[styles.property1frame289, property1Frame2891Style]}>
      <Text style={styles.enterServiceInfo}>Enter Service Info</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  enterServiceInfo: {
    position: "absolute",
    top: 21,
    left: 18,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    textAlign: "left",
    width: 175,
    height: 22,
  },
  property1frame289: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorGainsboro,
    width: 356,
    height: 64,
    overflow: "hidden",
  },
});

export default Property1Frame1;
