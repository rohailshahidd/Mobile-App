import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import { Border, Color } from "../GlobalStyles";

const Vector3 = () => {
  return (
    <View style={styles.vector}>
      <Image
        style={[styles.property1defaultIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/property-1default3.png")}
      />
      <Image
        style={[styles.property1selectedIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/property-1selected3.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    height: 25,
    width: 9,
    left: 20,
    position: "absolute",
  },
  property1defaultIcon: {
    top: 20,
  },
  property1selectedIcon: {
    top: 89,
  },
  vector: {
    borderRadius: Border.br_8xs,
    borderStyle: "dashed",
    borderColor: Color.colorBlueviolet_100,
    borderWidth: 1,
    width: 49,
    height: 134,
    overflow: "hidden",
  },
});

export default Vector3;
