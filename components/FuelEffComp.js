import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import axios from "axios";
import Nav1 from "../components/Nav1";
import { FontFamily, Color } from "../GlobalStyles";
import { useRoute } from '@react-navigation/native';

const FuelComp = () => {
  const [fuels, setFuels] = useState([]);
  const route = useRoute();
  const { userId } = route.params;

  useEffect(() => {
    fetchFuels();
  }, []);

  const fetchFuels = async () => {
    try {
      const response = await axios.get(`http://192.168.8.100:3000/fuels?userId=${userId}`);
      console.log(response.data);
      setFuels(response.data);
    } catch (error) {
      console.error("Error fetching fuels data:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://192.168.8.100:3000/fuels/${id}`);
      fetchFuels(); // Refresh the list after deletion
    } catch (error) {
      console.error("Error deleting fuel data:", error);
    }
  };

  return (
    <ScrollView horizontal={true}>
      <View style={styles.container}>
        <ScrollView horizontal={true}> 
          <View style={styles.tableContainer}>
            <View style={styles.tableHeader}>
              <Text style={styles.headerCell}>Quantity</Text>
              <Text style={styles.headerCell}>Price Per Litre</Text>
              <Text style={styles.headerCell}>Odometer Reading</Text>
              <Text style={styles.headerCell}>Fuel Efficiency</Text>
              <Text style={styles.headerCell}>Date</Text>
              <Text style={styles.headerCell}>Action</Text>
            </View>
            <ScrollView style={styles.scrollView}>
              {fuels.map((fuel) => (
                <View key={fuel._id} style={styles.tableRow}>
                  <Text style={styles.cell}>{fuel.quantity}</Text>
                  <Text style={styles.cell}>{fuel.price}</Text>
                  <Text style={styles.cell}>{fuel.odometer}</Text>
                  <Text style={styles.cell}>{fuel.efficiency}</Text>
                  <Text style={styles.cell}>{new Date(fuel.date).toLocaleDateString()}</Text>
                  <TouchableOpacity onPress={() => handleDelete(fuel._id)} style={styles.deleteButton}>
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
    color: Color.colorBlack,
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

export default FuelComp;
