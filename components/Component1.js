import * as React from "react";
import { StyleSheet, View } from "react-native";
import Property1Frame from "./Property1Frame";
import { Border, Color } from "../GlobalStyles";

const Component1 = () => {
  return (
    <View style={styles.component1}>
      <Property1Frame
        prop="Password"
        eyeSlash={require("../assets/vector.png")}
        propTop={20}
        propLeft={20}
        propWidth={328}
        propHeight="unset"
        propRight="unset"
        propBottom="unset"
        propMarginTop="unset"
        propWidth1={294}
        propHeight1={17}
        propOverflow="unset"
      />
      <Property1Frame
        prop="********"
        eyeSlash={require("../assets/eyeslash.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  component1: {
    borderRadius: Border.br_8xs,
    borderStyle: "dashed",
    borderColor: Color.colorBlueviolet_100,
    borderWidth: 1,
    width: 368,
    height: 129,
    overflow: "hidden",
  },
});

export default Component1;
