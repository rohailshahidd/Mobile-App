import React, { useState, forwardRef, useImperativeHandle, useMemo } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const PriceComp = forwardRef(({ propTop, propLeft, propLeft1 }, ref) => {
  const [price, setPrice] = useState("");

  useImperativeHandle(ref, () => ({
    getData: () => price,
    reset: () => setPrice(""),

  }));


  const priceCompStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("left", propLeft),
    };
  }, [propTop, propLeft]);

  const priceStyle = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft1),
    };
  }, [propLeft1]);

  return (
    <View style={[styles.priceComp, priceCompStyle]}>
      <View style={styles.priceCompChild} />
      <Text style={[styles.priceLabel, priceStyle]}>Price Per Litre</Text>  
      <TextInput
        style={[styles.priceInput, priceStyle]}
        onChangeText={setPrice}
        value={price}
        keyboardType="numeric" 
        underlineColorAndroid="transparent"  // Removes the underline on Android
        clearButtonMode="while-editing"  // Shows a clear button on iOS when editing
      />
    </View>
  );
});

const styles = StyleSheet.create({
  priceCompChild: {
    height: "60%",
    width: "100%",
    top: "34.94%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGainsboro,
    position: "absolute",
  },
  priceLabel: {
    position: "absolute",
    top: "0%",  // Adjust position as needed
    left: "3.45%",
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interRegular,
    color: Color.colorWhite,
    textAlign: "center",
  },
  priceInput: {
    position: "absolute",
    top: "50%",  // Center vertically in the remaining part of the view
    left: "3.45%",
    width: "93.1%",  // Adjusted width to fill container, minus the left offset
    height: "34.94%",  // Height adjusted to fit within the component
    fontSize: FontSize.size_xl,
    letterSpacing: 0.2,
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    textAlign: "center",
    backgroundColor: 'transparent',  // Ensures input background matches design
    borderColor: 'transparent',  // Ensures no border shows
  },
  priceComp: {
    top: 111,
    left: 70,
    width: 261,
    height: 83,
    position: "absolute",
  },
});

export default PriceComp;
