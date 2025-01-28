import * as React from "react";
import { StyleSheet, View } from "react-native";
import Property1Group from "./Property1Group";
import { Border, Color } from "../GlobalStyles";

const Component3 = () => {
  return (
    <View style={styles.component28}>
      <Property1Group
        abc="Abc"
        propTop={20}
        propLeft={20}
        propBackgroundColor="#ff8a00"
        propBorderStyle="unset"
        propBorderColor="unset"
      />
      <Property1Group abc="Abc" />
    </View>
  );
};

const styles = StyleSheet.create({
  component28: {
    borderRadius: Border.br_8xs,
    borderStyle: "dashed",
    borderColor: Color.colorBlueviolet_100,
    borderWidth: 1,
    width: 212,
    height: 309,
    overflow: "hidden",
  },
});

export default Component3;
