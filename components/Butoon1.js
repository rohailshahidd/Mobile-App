import * as React from "react";
import { StyleSheet, View } from "react-native";
import Property1Variant2 from "./Property1Variant2";
import { Border, Color } from "../GlobalStyles";

const Butoon1 = () => {
  return (
    <View style={styles.butoon}>
      <Property1Variant2
        buttonText="Back"
        propTop={19}
        propLeft={19}
        propBackgroundColor="#ff8a00"
        propBorderColor="#000"
        propBorderWidth={1}
        propWidth={360}
      />
      <Property1Variant2 buttonText="Back" />
    </View>
  );
};

const styles = StyleSheet.create({
  butoon: {
    borderRadius: Border.br_8xs,
    borderStyle: "dashed",
    borderColor: Color.colorBlueviolet_100,
    borderWidth: 1,
    width: 398,
    height: 156,
    overflow: "hidden",
  },
});

export default Butoon1;
