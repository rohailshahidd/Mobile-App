import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property1Frame2 = ({
  property1Frame289Position,
  property1Frame289Top,
  property1Frame289Left,
}) => {
  const property1Frame2892Style = useMemo(() => {
    return {
      ...getStyleValue("position", property1Frame289Position),
      ...getStyleValue("top", property1Frame289Top),
      ...getStyleValue("left", property1Frame289Left),
    };
  }, [property1Frame289Position, property1Frame289Top, property1Frame289Left]);

  return (
    <View style={[styles.property1frame289, property1Frame2892Style]}>
      <Text style={styles.enterDateDdmmyyyy}>{`Enter Date

DD/MM/YYYY`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  enterDateDdmmyyyy: {
    position: "absolute",
    top: 15,
    left: 15,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    textAlign: "left",
    width: 258,
    height: 49,
  },
  property1frame289: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorGainsboro,
    width: 349,
    height: 64,
    overflow: "hidden",
  },
});

export default Property1Frame2;
