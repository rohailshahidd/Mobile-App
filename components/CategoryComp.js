import React, { useState, forwardRef, useImperativeHandle } from "react";
import { View, Text, StyleSheet } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const CategoryComp = forwardRef((props, ref) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Fuel', value: 'Fuel' },
    { label: 'Maintenance', value: 'Maintenance' },
    { label: 'Insurance', value: 'Insurance' },
    { label: 'Registration/Taxes', value: 'Registration/Taxes' },
    { label: 'Parking/Tolls', value: 'Parking/Tolls' },
    { label: 'Repairs', value: 'Repairs' },
    { label: 'Accessories/Modifications', value: 'Accessories/Modifications' },
    { label: 'Car Washes', value: 'Car Washes' },
    { label: 'Lease/Loan Payments', value: 'Lease/LoanPayments' }
  ]);

  useImperativeHandle(ref, () => ({
    getData: () => value,
    reset: () => setValue(""),

  }));
  return (
    <View style={styles.categoryComp}>
      <Text style={styles.categoryLabel}>Category</Text>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        style={styles.dropdownStyle}
        dropDownContainerStyle={styles.dropdownContainerStyle}
        textStyle={styles.dropdownText}
        placeholder="Select a Category"
      />
    </View>
  );
});

const styles = StyleSheet.create({
  categoryComp: {
    marginTop: 200,
    marginLeft: 70,
    width: 260,
    height: 122, // Adjusted for dropdown
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryLabel: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interRegular,
    color: Color.colorWhite,
    marginBottom: 5,
    alignSelf: 'flex-start',  // Aligns the text to the start of the flex container
    paddingLeft: Padding.p_8xs,
  },
  dropdownStyle: {
    width: '100%',
    backgroundColor: Color.colorGainsboro,
  },
  dropdownContainerStyle: {
    backgroundColor: Color.colorGainsboro,
    borderColor: Color.colorGray_200,
  },
  dropdownText: {
    fontSize: FontSize.size_md,
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
  },
});

export default CategoryComp;
