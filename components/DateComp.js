import React, { useMemo, forwardRef, useImperativeHandle, useState, useEffect } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { FontFamily, FontSize, Border, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const DateComp = forwardRef(({ propTop, propLeft, propLeft1, reset }, ref) => {
  const [date, setDate] = useState("");

  useImperativeHandle(ref, () => ({
    getData: () => date,
    reset: () => setDate(""),
  }));

  const dateCompStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("left", propLeft),
    };
  }, [propTop, propLeft]);

  const dateStyle = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft1),
    };
  }, [propLeft1]);

  return (
    <View style={[styles.dateComp, dateCompStyle]}>
      <View style={styles.dateCompChild} />
      <Text style={[styles.ddmmyyyy, styles.dateTypo]}>Date</Text>
      <TextInput
        style={[styles.dateInput, styles.dateTypo, dateStyle]}
        onChangeText={setDate}
        value={date}
        placeholder="MM/DD/YYYY"
        // keyboardType="numeric" 
        placeholderTextColor={Color.colorWhite}
        underlineColorAndroid="transparent"
      />
    </View>
  );
});

const styles = StyleSheet.create({
  dateTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    letterSpacing: 0.2,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  dateCompChild: {
    height: "63%",
    width: "100%",
    top: "37.35%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGainsboro,
    position: "absolute",
  },
  ddmmyyyy: {
    height: "33.73%",
    width: "51.15%",
    top: "0%",
    left: "5.77%",
    color: Color.colorGainsboro,
  },
  dateInput: {
    marginTop: "5%",
    top: "34%",
    left: "4.23%",
    width: "90%", // Adjust as needed
    height: "30%", // Adjust as needed
    color: Color.colorBlack,
    borderColor: 'transparent', // Hides the border
    position: 'absolute', // Ensure input is properly positioned
  },
  dateComp: {
    top: 336,
    left: 69,
    width: 260,
    height: 83,
    position: "absolute",
  },
});

export default DateComp;
