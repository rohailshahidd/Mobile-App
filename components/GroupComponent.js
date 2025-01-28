import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { FontFamily, Color, FontSize } from "../GlobalStyles";

const GroupComponent = ({ email, abcgmailcom }) => {
  return (
    <View style={styles.groupParent}>
      <View style={styles.groupChildPosition}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <View style={styles.groupItem} />
      </View>
      <Text style={[styles.email, styles.emailTypo]}>{email}</Text>
      <Text style={[styles.abcgmailcom, styles.emailTypo]}>{abcgmailcom}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    left: 0,
    top: 0,
    position: "absolute",
    height: 79,
    width: 353,
  },
  emailTypo: {
    textAlign: "left",
    fontFamily: FontFamily.poppinsExtraBold,
    fontWeight: "800",
    position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.colorDarkorange_100,
  },
  groupItem: {
    top: 27,
    left: 12,
    backgroundColor: Color.colorWhite,
    height: 41,
    width: 327,
    position: "absolute",
  },
  email: {
    left: 13,
    fontSize: FontSize.size_xl,
    color: Color.colorWhite,
    width: 326,
    height: 22,
    top: 0,
    textAlign: "left",
    fontFamily: FontFamily.poppinsExtraBold,
    fontWeight: "800",
  },
  abcgmailcom: {
    top: 49,
    left: 14,
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
    height: 30,
    width: 327,
  },
  groupParent: {
    marginTop: 26,
    height: 79,
    width: 353,
  },
});

export default GroupComponent;
