import React, { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import FuelEffComp from "./FuelEffComp";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const FuelEffFrame = ({
  contentLeft,
  contentWidth,
  contentTop,
  showContent,
  showFuelID,
  showText,
  showContent1,
  showContent11,
}) => {
  const fuelEffFrameStyle = useMemo(() => {
    return {
      ...getStyleValue("left", contentLeft),
      ...getStyleValue("width", contentWidth),
      ...getStyleValue("top", contentTop),
    };
  }, [contentLeft, contentWidth, contentTop]);

  return (
    <View style={[styles.fuelEffFrame, fuelEffFrameStyle]}>
      <FuelEffComp
        showContent
        showFuelID={false}
        showText
        showContent1
        showContent11
      />
    </View>
  );
};

const styles = StyleSheet.create({
  fuelEffFrame: {
    position: "absolute",
    top: 283,
    left: 0,
    width: 390,
    height: 325,
  },
});

export default FuelEffFrame;
