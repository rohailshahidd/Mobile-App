import * as React from "react";
import { StyleSheet, View } from "react-native";
import Nav1 from "./Nav1";
import Property1Variant3 from "./Property1Variant3";
import Nav from "./Nav";
import Nav2 from "./Nav2";
import { Border, Color } from "../GlobalStyles";

const Nav3 = () => {
  return (
    <View style={styles.nav}>
      <Nav1 propTop={20} propLeft={20} />
      <Property1Variant3
        vector={require("../assets/vector9.png")}
        vector1={require("../assets/vector5.png")}
        abc="Review"
        propTop={172}
        propRight="51.82%"
        propLeft="19.01%"
        propTop1="45.45%"
        propBottom="37.12%"
        propTop2="9.09%"
        propBottom1="68.18%"
        propRight1="28.39%"
        propLeft1="68.49%"
        propTop3="40.91%"
        propBottom2="37.12%"
        propTop4="78.79%"
        propLeft2="6.51%"
        propTop5="50.76%"
        propLeft3="25.52%"
        propColor="#fff"
        propTop6="87.12%"
        propLeft4="80.99%"
        propColor1="rgba(255, 255, 255, 0)"
      />
      <Nav propTop={324} propLeft={20} />
      <Nav2 propTop={476} propLeft={20} />
      <Property1Variant3
        vector={require("../assets/vector2.png")}
        vector1={require("../assets/vector10.png")}
        abc="Abc"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  nav: {
    borderRadius: Border.br_8xs,
    borderStyle: "dashed",
    borderColor: Color.colorBlueviolet_100,
    borderWidth: 1,
    width: 424,
    height: 780,
    overflow: "hidden",
  },
});

export default Nav3;
