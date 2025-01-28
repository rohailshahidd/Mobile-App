import * as React from "react";
import { StyleSheet, View } from "react-native";
import Property1Variant from "./Property1Variant";
import { Border, Color } from "../GlobalStyles";

const Enterbutton = () => {
  return (
    <View style={styles.enterbutton}>
      <Property1Variant
        propTop={20}
        propLeft={20}
        propBackgroundColor="#d9d9d9"
        propColor="#000"
      />
      <Property1Variant />
    </View>
  );
};

const styles = StyleSheet.create({
  enterbutton: {
    borderRadius: Border.br_8xs,
    borderStyle: "dashed",
    borderColor: Color.colorBlueviolet,
    borderWidth: 1,
    width: 188,
    height: 148,
    overflow: "hidden",
  },
});

export default Enterbutton;