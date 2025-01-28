import * as React from "react";
import { StyleSheet, View } from "react-native";
import Property1Variant1 from "./Property1Variant1";
import { Border, Color } from "../GlobalStyles";

const Butoon = () => {
  return (
    <View style={styles.butoon}>
      <Property1Variant1
        reset="Reset Password"
        propTop={20}
        propLeft={20}
        propHeight={86}
        propWidth={378}
        propPosition="absolute"
        propMarginTop="unset"
        propBackgroundColor="#ff8a00"
        propBorderColor="#000"
        propBorderWidth={1}
        propWidth1={360}
        propHeight1={48}
        propHeight2="72.09%"
        propWidth2="84.13%"
        propTop1="15.12%"
        propLeft1="8.47%"
      />
      <Property1Variant1 reset="Reset Password" />
    </View>
  );
};

const styles = StyleSheet.create({
  butoon: {
    borderRadius: Border.br_8xs,
    borderStyle: "dashed",
    borderColor: Color.colorBlueviolet_100,
    borderWidth: 1,
    width: 418,
    height: 192,
    overflow: "hidden",
  },
});

export default Butoon;
