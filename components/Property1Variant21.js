import React, { useMemo } from "react";
import { StyleSheet, View, ImageSourcePropType } from "react-native";
import Property1Default from "./Property1Default";
import Property1Frame from "./Property1Frame";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property1Variant2 = ({
  eyeSlash,
  propTop,
  propLeft,
  property1Variant4Height,
  property1Variant4Width,
  property1Variant4Top,
  property1Variant4Right,
  property1Variant4Bottom,
  property1Variant4Left,
  property1Variant4BorderWidth,
  property1Variant4MarginTop,
  property1Variant4Right1,
  property1Variant4Left1,
  propWidth,
  emailAddressHeight,
  emailAddressOverflow,
}) => {
  const property1Variant4Style = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("left", propLeft),
    };
  }, [propTop, propLeft]);

  const property1DefaultStyle = useMemo(() => {
    return {
      ...getStyleValue("height", property1Variant4Height),
      ...getStyleValue("width", property1Variant4Width),
      ...getStyleValue("top", property1Variant4Top),
      ...getStyleValue("right", property1Variant4Right),
      ...getStyleValue("bottom", property1Variant4Bottom),
      ...getStyleValue("left", property1Variant4Left),
      ...getStyleValue("borderWidth", property1Variant4BorderWidth),
    };
  }, [
    property1Variant4Height,
    property1Variant4Width,
    property1Variant4Top,
    property1Variant4Right,
    property1Variant4Bottom,
    property1Variant4Left,
    property1Variant4BorderWidth,
  ]);

  const property1Frame4Style = useMemo(() => {
    return {
      ...getStyleValue("marginTop", property1Variant4MarginTop),
      ...getStyleValue("right", property1Variant4Right1),
      ...getStyleValue("left", property1Variant4Left1),
    };
  }, [
    property1Variant4MarginTop,
    property1Variant4Right1,
    property1Variant4Left1,
  ]);

  const textStyle = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
    };
  }, [propWidth]);

  const eyeSlashIconStyle = useMemo(() => {
    return {
      ...getStyleValue("height", emailAddressHeight),
      ...getStyleValue("overflow", emailAddressOverflow),
    };
  }, [emailAddressHeight, emailAddressOverflow]);

  return (
    <View style={[styles.property1variant4, property1Variant4Style]}>
      <Property1Default
        emailAddressLabel="Password"
        showEmailAddress={false}
        propTop="-6.52%"
        propLeft="-0.84%"
        propWidth="101.68%"
        propHeight="113.04%"
        propRight="-0.84%"
        propBottom="-6.52%"
        propBorderWidth={3}
      />
      <Property1Frame
        eyeSlash={require("../assets/eyeslash.png")}
        propTop="50%"
        propLeft="5.59%"
        propWidth="91.62%"
        propHeight="unset"
        propRight="2.79%"
        propBottom="unset"
        propMarginTop={-12}
        propWidth1={296}
        propHeight1={25}
        propOverflow="hidden"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  property1variant4: {
    position: "absolute",
    top: 242,
    left: 23,
    width: 358,
    height: 46,
  },
});

export default Property1Variant2;
