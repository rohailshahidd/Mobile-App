import * as React from "react";
import { StyleSheet, View } from "react-native";
import Component from "./Component";
import Property1Variant2 from "./Property1Variant2";
import { Border, Color } from "../GlobalStyles";

const Component2 = () => {
  return (
    <View style={styles.component6}>
      <Component
        password="Password"
        propTop={20}
        propLeft={20}
        showEmailAddress={false}
      />
      <Property1Variant2
        eyeSlash={require("../assets/eyeslash.png")}
        propTop={168}
        propLeft={20}
        property1Variant4Height="104.35%"
        property1Variant4Width="100.56%"
        property1Variant4Top="-2.17%"
        property1Variant4Right="-0.28%"
        property1Variant4Bottom="-2.17%"
        property1Variant4Left="-0.28%"
        property1Variant4BorderWidth={1}
        property1Variant4MarginTop={-12}
        property1Variant4Right1="2.79%"
        property1Variant4Left1="5.59%"
        propWidth={296}
        emailAddressHeight={25}
        emailAddressOverflow="hidden"
      />
      <Property1Variant2
        eyeSlash={require("../assets/vector.png")}
        propTop={94}
        propLeft={23}
        property1Variant4Height="113.04%"
        property1Variant4Width="101.68%"
        property1Variant4Top="-6.52%"
        property1Variant4Right="-0.84%"
        property1Variant4Bottom="-6.52%"
        property1Variant4Left="-0.84%"
        property1Variant4BorderWidth={3}
        property1Variant4MarginTop={-11}
        property1Variant4Right1="4.19%"
        property1Variant4Left1="4.19%"
        propWidth={294}
        emailAddressHeight={17}
        emailAddressOverflow="unset"
      />
      <Property1Variant2 eyeSlash={require("../assets/eyeslash.png")} />
    </View>
  );
};

const styles = StyleSheet.create({
  component6: {
    borderRadius: Border.br_8xs,
    borderStyle: "dashed",
    borderColor: Color.colorBlueviolet_100,
    borderWidth: 1,
    width: 401,
    height: 308,
    overflow: "hidden",
  },
});

export default Component2;
