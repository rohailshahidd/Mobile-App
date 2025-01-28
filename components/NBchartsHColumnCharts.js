import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const NBchartsHColumnCharts = () => {
  return (
    <View style={styles.nbchartsHcolumncharts}>
      <View style={styles.nbchartsHcolumnchartsChild} />
      <Image
        style={[styles.horizontalLinesIcon, styles.bar1Position]}
        contentFit="cover"
        source={require("../assets/horizontal-lines2.png")}
      />
      <Image
        style={styles.verticalLinesIcon}
        contentFit="cover"
        source={require("../assets/vertical-lines2.png")}
      />
      <View style={[styles.leftText, styles.texts1Position]}>
        <Text style={[styles.photoshop, styles.xdTypo]}>Photoshop</Text>
        <Text style={[styles.illustrator, styles.xdTypo]}>Illustrator</Text>
        <Text style={[styles.xd, styles.xdTypo]}>Xd</Text>
      </View>
      <View style={styles.bottomText}>
        <Text style={[styles.text, styles.textTypo1]}>0</Text>
        <Text style={[styles.text1, styles.textTypo1]}>25</Text>
        <Text style={[styles.text2, styles.textTypo1]}>50</Text>
        <Text style={[styles.text3, styles.textTypo1]}>75</Text>
        <Text style={[styles.text4, styles.textTypo1]}>100</Text>
      </View>
      <View style={[styles.bar1, styles.bar1Position]}>
        <View style={[styles.view, styles.viewPosition]} />
        <View style={[styles.view1, styles.viewPosition]} />
        <View style={[styles.view2, styles.viewPosition]} />
      </View>
      <View style={[styles.texts1, styles.texts1Position]}>
        <Text style={[styles.text5, styles.textTypo]}>40</Text>
        <Text style={[styles.text6, styles.textTypo]}>88</Text>
        <Text style={[styles.text7, styles.textTypo]}>60</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bar1Position: {
    left: 69,
    position: "absolute",
  },
  texts1Position: {
    height: 127,
    top: 21,
    position: "absolute",
  },
  xdTypo: {
    textAlign: "right",
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  textTypo1: {
    textAlign: "center",
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_xs,
    top: 0,
    position: "absolute",
  },
  viewPosition: {
    height: 20,
    left: 0,
    position: "absolute",
  },
  textTypo: {
    textAlign: "left",
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  nbchartsHcolumnchartsChild: {
    left: 29,
    backgroundColor: Color.colorWhite,
    width: 349,
    top: 0,
    position: "absolute",
    height: 190,
  },
  horizontalLinesIcon: {
    top: 1,
    width: 309,
    height: 169,
  },
  verticalLinesIcon: {
    left: 70,
    width: 308,
    height: 170,
    top: 0,
    position: "absolute",
  },
  photoshop: {
    left: 0,
    top: 0,
  },
  illustrator: {
    left: 8,
    top: 57,
  },
  xd: {
    left: 44,
    top: 113,
  },
  leftText: {
    width: 59,
    left: 0,
  },
  text: {
    left: 0,
  },
  text1: {
    left: 73,
  },
  text2: {
    left: 150,
  },
  text3: {
    left: 227,
  },
  text4: {
    left: 301,
  },
  bottomText: {
    top: 176,
    left: 67,
    width: 322,
    height: 14,
    position: "absolute",
  },
  view: {
    backgroundColor: Color.colorMediumslateblue,
    width: 123,
    top: 0,
  },
  view1: {
    backgroundColor: Color.colorDarkorange_200,
    width: 271,
    top: 57,
  },
  view2: {
    backgroundColor: Color.colorBlueviolet_200,
    width: 185,
    top: 113,
  },
  bar1: {
    top: 18,
    height: 133,
    width: 271,
  },
  text5: {
    left: 0,
    top: 0,
  },
  text6: {
    left: 148,
    top: 57,
  },
  text7: {
    left: 62,
    top: 113,
  },
  texts1: {
    left: 198,
    width: 162,
  },
  nbchartsHcolumncharts: {
    width: 388,
    height: 190,
  },
});

export default NBchartsHColumnCharts;
