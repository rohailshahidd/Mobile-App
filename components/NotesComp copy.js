import * as React from "react";
import { forwardRef, useImperativeHandle, useState } from 'react';
import { StyleSheet, View, Text, TextInput } from "react-native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const NotesComp = forwardRef((props, ref) => {
  const [notes, setNotes] = useState('');

  useImperativeHandle(ref, () => ({
    getData: () => notes,
    reset: () => setNotes(""),

  }));

  return (
    <View style={styles.notesComp}>
      <TextInput
        style={styles.notesInput}
        onChangeText={setNotes}
        value={notes}
        placeholder="Enter notes here..."
        placeholderTextColor={Color.colorWhite}
      />
      <Text style={styles.notes}>Notes</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  notesInput: {
    height: "82.39%",
    width: "100%",
    top: "17.61%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: Color.colorGainsboro,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
    color: Color.colorBlack,
    paddingHorizontal: 10,
    borderRadius: 10, // This line adds rounded corners to the TextInput
  },
  notes: {
    top: "0%",
    left: "4.2%",
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interRegular,
    color: Color.colorWhite,
    textAlign: "left",
    position: "absolute",
  },
  notesComp: {
    top: 470,
    left: 69,
    width: 262,
    height: 176,
    position: "absolute",
  },
});

export default NotesComp;
