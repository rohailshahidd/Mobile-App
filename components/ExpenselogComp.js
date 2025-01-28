import React, { useState, useEffect } from "react";
import Nav1 from "../components/Nav1";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import axios from "axios";
import { FontFamily, Color } from "../GlobalStyles";
import { useRoute } from '@react-navigation/native';

const ExpenselogComp = () => {
  const route = useRoute();
  const { userId } = route.params;
  console.log(userId);
  const [expenses, setExpenses] = useState([]);
  
  

  useEffect(() => {
    fetchExpenses();
    
  }, []);

  const fetchExpenses = async () => {
    try {
      const response = await axios.get(`http://192.168.8.100:3000/expenses?userId=${userId}`);
      setExpenses(response.data);
    } catch (error) {
      console.error("Error fetching expenses data:", error);
    }
  };
 
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://192.168.8.100:3000/expenses/${id}`);
      fetchExpenses(); // Refresh the list after deletion
    } catch (error) {
      console.error("Error deleting expense data:", error);
    }
  };

  return (
    <ScrollView horizontal={true}>
    <View style={styles.container}>
        <ScrollView horizontal={true}> 
          <View style={styles.tableContainer}>
            <View style={styles.tableHeader}>
              <Text style={styles.headerCell}>Amount</Text>
              <Text style={styles.headerCell}>Category</Text>
              <Text style={styles.headerCell}>Date</Text>
              <Text style={styles.headerCell}>Notes</Text>
              <Text style={styles.headerCell}>Action</Text>
            </View>
            <ScrollView style={styles.scrollView}>
              {expenses.map((expense) => (
                <View key={expense._id} style={styles.tableRow}>
                  <Text style={styles.cell}>{expense.amount}</Text>
                  <Text style={styles.cell}>{expense.category}</Text>
                  <Text style={styles.cell}>{new Date(expense.date).toLocaleDateString()}</Text>
                  <Text style={styles.cell}>{expense.notes}</Text>
                  <TouchableOpacity onPress={() => handleDelete(expense._id)} style={styles.deleteButton}>
                    <Text style={styles.deleteButtonText}>Delete</Text>
                  </TouchableOpacity>
                </View>
              ))}
            </ScrollView>
          </View>
        </ScrollView>
        <Nav1 
       userid = {userId}
       propTop={705} 
       />
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
  
    flex: 1,
    backgroundColor: Color.colorWhite,

  },
  tableContainer: {
    minWidth: 150, // Adjust this value to ensure all columns fit
  },
  scrollView: {
    width: '100%',
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: Color.colorDarkorange_100,
    height: 50, // Fixed height for the header
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: Color.colorBlack,
  },
  headerCell: {
    flex: 1,
    padding: 15,
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    textAlign: "center",
    minWidth: 200,
  },
  cell: {
    flex: 1,
    padding: 15,
    textAlign: "center",
    backgroundColor: Color.colorWhite,
    borderColor: Color.colorBlack,
    minWidth: 200,
  },
  deleteButton: {
    padding: 15,
    backgroundColor: Color.colorRed,
    justifyContent: "center",
    alignItems: "center",
    minWidth: 200,
  },
  deleteButtonText: {
    color: Color.colorRed,
    fontFamily: FontFamily.interBold,
  },
});

export default ExpenselogComp;
