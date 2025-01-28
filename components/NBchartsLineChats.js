import * as React from "react";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const NBchartsLineChats = ({ lineArea, points }) => {
  return (
    <View style={styles.nbchartsLinechats}>
      <View
        style={[
          styles.nbchartsLinechatsChild,
          styles.verticalLinesIconPosition,
        ]}
      />
      <Image
        style={[styles.horizontalLinesIcon, styles.lineAreaPosition]}
        contentFit="cover"
        source={require("../assets/horizontal-lines.png")}
      />
      <Image
        style={[styles.verticalLinesIcon, styles.verticalLinesIconPosition]}
        contentFit="cover"
        source={require("../assets/vertical-lines.png")}
      />
      <View style={styles.leftText}>
        <Text style={[styles.text, styles.textTypo1]}>0</Text>
        <Text style={[styles.text1, styles.textTypo]}>25</Text>
        <Text style={[styles.text2, styles.textTypo]}>50</Text>
        <Text style={[styles.text3, styles.textTypo]}>75</Text>
        <Text style={[styles.text4, styles.textTypo1]}>100</Text>
      </View>
      <View style={styles.bottomText}>
        <Text style={[styles.monday, styles.mondayTypo]}>Monday</Text>
        <Text style={[styles.tuesday, styles.mondayTypo]}>Tuesday</Text>
        <Text style={[styles.wednesday, styles.mondayTypo]}>Wednesday</Text>
        <Text style={[styles.thursday, styles.mondayTypo]}>Thursday</Text>
        <Text style={[styles.friday, styles.mondayTypo]}>Friday</Text>
        <Text style={[styles.saturday, styles.mondayTypo]}>Saturday</Text>
        <Text style={[styles.sunday, styles.mondayTypo]}>Sunday</Text>
      </View>
      <Image
        style={[styles.lineArea, styles.lineAreaPosition]}
        contentFit="cover"
        source={lineArea}
      />
      <Image style={styles.pointsIcon} contentFit="cover" source={points} />
    </View>
  );
};

const styles = StyleSheet.create({
  verticalLinesIconPosition: {
    top: 7,
    position: "absolute",
  },
  lineAreaPosition: {
    width: 309,
    left: 40,
    position: "absolute",
  },
  textTypo1: {
    textAlign: "right",
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  textTypo: {
    left: 7,
    textAlign: "right",
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  mondayTypo: {
    textAlign: "center",
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_xs,
    top: 0,
    position: "absolute",
  },
  nbchartsLinechatsChild: {
    backgroundColor: Color.colorWhite,
    width: 349,
    height: 190,
    left: 0,
  },
  horizontalLinesIcon: {
    top: 8,
    height: 169,
  },
  verticalLinesIcon: {
    left: 41,
    width: 308,
    height: 170,
  },
  text: {
    top: 169,
    left: 14,
  },
  text1: {
    top: 127,
  },
  text2: {
    top: 85,
  },
  text3: {
    top: 42,
  },
  text4: {
    top: 0,
    left: 0,
  },
  leftText: {
    left: 9,
    width: 21,
    height: 183,
    top: 0,
    position: "absolute",
  },
  monday: {
    left: 0,
  },
  tuesday: {
    left: 51,
  },
  wednesday: {
    left: 93,
  },
  thursday: {
    left: 151,
  },
  friday: {
    left: 211,
  },
  saturday: {
    left: 254,
  },
  sunday: {
    left: 310,
  },
  bottomText: {
    top: 183,
    left: 19,
    width: 350,
    height: 14,
    position: "absolute",
  },
  lineArea: {
    top: 92,
    height: 85,
  },
  pointsIcon: {
    top: 90,
    left: 38,
    width: 314,
    height: 56,
    position: "absolute",
  },
  nbchartsLinechats: {
    width: 369,
    height: 197,
  },
});

export default NBchartsLineChats;
