import React, { useRef } from "react";
import { Image, StyleSheet, View, ImageBackground, Text, Alert } from "react-native";
import { useNavigation } from '@react-navigation/native';
import Nav1 from "../components/Nav1";
import Property1Variant from "../components/Property1Variant";
import NotesComp from "../components/NotesComp";
import DateComp from "../components/DateComp";
import CategoryComp from "../components/CategoryComp";
import AmountComp from "../components/AmountComp";
import { FontSize, FontFamily, Color } from "../GlobalStyles";
import Nav from "../components/Nav";
import { useEffect } from "react";

const InputExpenses = ({ route }) => {
  const { userId } = route.params;
  console.log(userId);
  const navigation = useNavigation();
  const notesRef = useRef();
  const dateRef = useRef();
  const categoryRef = useRef();
  const amountRef = useRef();

  const validateDate = (dateString) => {
    const dateFormatRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/(\d{4})$/;
    if (!dateFormatRegex.test(dateString)) {
      console.log("Date format is incorrect.");
      return false;
    }

    const [month, day, year] = dateString.split('/').map(num => parseInt(num, 10));
    const enteredDate = new Date(year, month - 1, day);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (enteredDate > today) {
      console.log("Entered date is after today's date.");
      return false;
    }

    console.log("Date is valid.");
    return true;
  };

  const resetForm = () => {
    notesRef.current.reset();
    amountRef.current.reset(); 
    categoryRef.current.reset(); 
    dateRef.current.reset();
  };


  const handleSubmit = async () => {
    const notes = notesRef.current.getData();
    const date = dateRef.current.getData();
    const category = categoryRef.current.getData();
    const amount = amountRef.current.getData();

    if (!category || !amount) {
      Alert.alert("Missing Information", "Please ensure all fields, including amount and category, are filled.");
      return;
    }    

    if (!date || !validateDate(date)) {
      Alert.alert("Invalid Date", "Please enter a valid date in the format MM/DD/YYYY and ensure it is not after today's date.");
      dateRef.current.reset();
      return;
    }

    const expenseData = {
      userId,
      notes,
      date,
      category,
      amount
    };

    try {
      const response = await fetch('http://192.168.8.100:3000/expenses', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(expenseData)
      });
      if (!response.ok) {
        throw new Error('Failed to save expense');
      }
      // Success: navigate and show alert
      Alert.alert('Success', 'Expense saved successfully!', [
        { text: 'OK', onPress: () => navigation.navigate('ExpenseLog1',{userId}) }
      ]);
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };


  useEffect(() => {
    // Reset form when component mounts (initial render)
    resetForm();
  }, []);

  // Navigation event listener to reset form when navigating to the form page
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      resetForm();
    });
    return unsubscribe;
  }, [navigation]);
    
  return (
    <ImageBackground
      style={styles.inputExpensesIcon}
      resizeMode="cover"
      source={require("../assets/inputexpenses.png")}  // Ensure the path is correct
    >
      <Image
        style={styles.inputExpensesChild}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}  // Ensure the path is correct
      />
      <Image
        style={styles.inputExpensesItem}
        contentFit="cover"
        source={require("../assets/ellipse-31.png")}  // Ensure the path is correct
      />
      <Property1Variant
        propTop={686}
        propLeft={126}
        propBackgroundColor="#d9d9d9"
        propColor="#000"
        onPress={handleSubmit} // Adjust 'ExpenseLog1' to your target screen
      />
      <NotesComp ref={notesRef} />
      <DateComp dDMMYYYY="DD/MM/YYYY" date="Date" ref={dateRef}/>
      <CategoryComp ref={categoryRef}/>
      <AmountComp
        amount="Amount"
        propTop={110}
        propLeft={73}
        propLeft1="4.98%"
        ref={amountRef}
      />
      <View style={styles.title}>
        <Text style={styles.addExpenseDetails}>
          Add Expense Details
        </Text>
      </View>
      <Nav1 
       userid = {userId}
       propTop={705} 
       />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  inputExpensesIcon: {
    flex: 1,
    width: "100%",
    height: 844,  // Adjust the height as necessary
    overflow: "hidden"
  },
  inputExpensesChild: {
    top: 20,
    width: 59,
    height: 100,
    left: 0,
    position: "absolute"
  },
  inputExpensesItem: {
    top: -8,
    left: 32,
    width: 105,
    height: 58,
    position: "absolute"
  },
  title: {
    top: 64,
    left: 92,
    width: 218,
    position: "absolute"
  },
  addExpenseDetails: {
    fontSize: FontSize.size_xl,
    letterSpacing: 0.2,
    fontStyle: "italic",
    fontFamily: FontFamily.interLight,
    color: Color.colorIvory,
    textAlign: "center",
    width: 216,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4
    },
    textShadowRadius: 4
  }
});

export default InputExpenses;
