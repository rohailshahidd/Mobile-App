import React, { useState, useEffect } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import GroupComponent from "../components/GroupComponent";
import Bar from "../components/Bar";
import Nav from "../components/Nav";
import { LineChart, BarChart } from 'react-native-chart-kit';
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Home = ({ route }) => {
  const { userId } = route.params;
  // Function to generate random data for charts
  const generateRandomData = (count) => {
    return Array.from({ length: count }, () => Math.floor(Math.random() * 100));
  };

  const [fuelData, setFuelData] = useState([]);
  const [maintenanceData, setMaintenanceData] = useState([]); 
  const [expensesData, setExpensesData] = useState([]);
  const [servicesData, setServicesData] = useState([]);
  const [averageFuelEfficiency, setAverageFuelEfficiency] = useState();
  const [avgfuel, setavgfuel] = useState(0);
  const [avgprice,setavgprice] = useState(0);
  const [totalexpensi,settotalexpensi] = useState(0);
  const [totalmaintain, setTotalMaintain] = useState(0);

  const [width1, setwidth1] = useState(0);
  const [width2, setwidth2] = useState(0);
  const [width3, setwidth3] = useState(0); 
  const [width4, setwidth4] = useState(0);

  useEffect(() => {
    // Function to fetch fuel data
    const fetchFuelData = async () => {
      try {
        const response = await fetch(`http://192.168.8.100:3000/fuels1/${userId}`);
        const data = await response.json();
        setFuelData(data);
      } catch (error) {
        console.error("Error fetching fuel data:", error);
      }
    };

    // Function to fetch maintenance data
    const fetchMaintenanceData = async () => {
      try {
        const response = await fetch(`http://192.168.8.100:3000/maintenance1/${userId}`);
        const data = await response.json();
        setMaintenanceData(data);
      } catch (error) {
        console.error("Error fetching maintenance data:", error);
      }
    };

    // Function to fetch expenses data
    const fetchExpensesData = async () => {
      try {
        const response = await fetch(`http://192.168.8.100:3000/expenses1/${userId}`);
        const data = await response.json();
        setExpensesData(data);
      } catch (error) {
        console.error("Error fetching expenses data:", error);
      }
    };

    // Function to fetch services data
    const fetchServicesData = async () => {
      try {
        const response = await fetch(`http://192.168.8.100:3000/services1/${userId}`);
        const data = await response.json();
        setServicesData(data);
      } catch (error) {
        console.error("Error fetching services data:", error); 
      }
    };

    // Call all fetch functions on component mount
    fetchFuelData();
    fetchMaintenanceData();
    fetchExpensesData();
    fetchServicesData();

    const totalFuelEfficiency = fuelData.reduce((acc, cur) => acc + cur.efficiency, 0);
    const averageEfficiency = fuelData.length !== 0 ? totalFuelEfficiency / fuelData.length : 0;
    setAverageFuelEfficiency(averageEfficiency);

    const totalFuel = fuelData.reduce((acc, cur) => acc + cur.quantity, 0);
    const totalFuelPrice = fuelData.reduce((acc, cur) => acc + cur.price, 0);
    const avgFuel = fuelData.length !== 0 ? totalFuel / fuelData.length : 0;
    const avgPrice = fuelData.length !== 0 ? totalFuelPrice / fuelData.length : 0;
    setavgfuel(avgFuel);
    setavgprice(avgPrice);
    const totalExpenses = expensesData.reduce((total, expense) => total + expense.amount, 0);
    settotalexpensi(totalExpenses);

    const totalMaintenance = maintenanceData.reduce((total, maintenance) => total + parseInt(maintenance.inputText), 0);
    setTotalMaintain(totalMaintenance);

    const widther1 = 5 * 200;
    const widther2 = 5 * 200;
    const widther3 = 5 * 200;
    setwidth1(widther1);
    setwidth2(widther2);
    setwidth3(widther3);
    
  }, [userId]);
  

  return (
    <View style={styles.home}>
      {/* Cover Image */}
      <Image
        style={styles.img437311}
        contentFit="cover"
        source={require("../assets/img-4373-1-11.png")}
      />
      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.scrollableContent}>
          <Text style={styles.dashboard}>Dashboard</Text>
          <Text style={styles.rohailShahid}>Fuel</Text>
          <GroupComponent email="Fuel Average" abcgmailcom={avgfuel} />
          {fuelData.length > 0 ? (  
            <ScrollView horizontal={true}>
        <LineChart
          data={{
            labels: fuelData.map(dataPoint => dataPoint.date),
            datasets: [
              {
                data: fuelData.map(dataPoint => dataPoint.price),
              },
            ],
          }}
          width={width1} // Dynamic width based on the number of data points
          height={300}
          yAxisLabel=""
          withInnerLines={false}
          chartConfig={{
            backgroundColor: '#ffffff',
            backgroundGradientFrom: '#ffffff',
            backgroundGradientTo: '#ffffff',
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '6',
              strokeWidth: '2',
              stroke: '#ffa726',
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </ScrollView>

          ):(
            <Text>No data available for the graph</Text>
          )}
          <GroupComponent email="Average Fuel Cost" abcgmailcom={avgprice} />
          {fuelData.length > 0 ? (  
            <ScrollView horizontal={true}>
        <LineChart
          data={{
            labels: fuelData.map(dataPoint => dataPoint.date),
            datasets: [
              {
                data: fuelData.map(dataPoint => dataPoint.price),
              },
            ],
          }}
          width={width1} // Dynamic width based on the number of data points
          height={300}
          yAxisLabel=""
          withInnerLines={false}
          chartConfig={{
            backgroundColor: '#ffffff',
            backgroundGradientFrom: '#ffffff',
            backgroundGradientTo: '#ffffff',
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '6',
              strokeWidth: '2',
              stroke: '#ffa726',
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </ScrollView>

          ):(
            <Text>No data available for the graph</Text>
          )}
          <GroupComponent email="Average Fuel Efficiency" abcgmailcom={averageFuelEfficiency} />
          {/* Fuel section with line chart */}
          {fuelData.length > 0 ? (  
            <ScrollView horizontal={true}>
        <LineChart
          data={{
            labels: fuelData.map(dataPoint => dataPoint.date),
            datasets: [
              {
                data: fuelData.map(dataPoint => dataPoint.efficiency),
              },
            ],
          }}
          width={width1} // Dynamic width based on the number of data points
          height={300}
          yAxisLabel=""
          withInnerLines={false}
          chartConfig={{
            backgroundColor: '#ffffff',
            backgroundGradientFrom: '#ffffff',
            backgroundGradientTo: '#ffffff',
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '6',
              strokeWidth: '2',
              stroke: '#ffa726',
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </ScrollView>

          ):(
            <Text>No data available for the graph</Text>
          )}
          {/* Fuel section with bar chart */}
          
          <Text style={styles.rohailShahid}>Expenses</Text>
          <GroupComponent email="Total Expenses" abcgmailcom={totalexpensi} />
          {expensesData.length > 0 ? (  
            <ScrollView horizontal={true}>
        <LineChart
          data={{
            labels: expensesData.map(dataPoint => dataPoint.date),
            datasets: [
              {
                data: expensesData.map(dataPoint => dataPoint.amount),
              },
            ],
          }}
          width={width2} // Dynamic width based on the number of data points
          height={300}
          yAxisLabel="Fuel Level"
          withInnerLines={false}
          chartConfig={{
            backgroundColor: '#ffffff',
            backgroundGradientFrom: '#ffffff',
            backgroundGradientTo: '#ffffff',
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '6',
              strokeWidth: '2',
              stroke: '#ffa726',
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </ScrollView>

          ):(
            <Text>No data available for the graph</Text>
          )}
          
          {/* Fuel section with bar chart */}

          <Text style={styles.rohailShahid}>Maintainence</Text>
          <GroupComponent email="Total Maintainence Cost" abcgmailcom={totalmaintain} />
          {maintenanceData.length > 0 ? (  
            <ScrollView horizontal={true}>
        <LineChart
          data={{
            labels: maintenanceData.map(dataPoint => dataPoint.inputText1),
            datasets: [
              {
                data: maintenanceData.map(dataPoint => parseInt(dataPoint.inputText)),
              },
            ],
          }}
          width={width3} // Dynamic width based on the number of data points
          height={300}
          yAxisLabel=""
          withInnerLines={false}
          chartConfig={{
            backgroundColor: '#ffffff',
            backgroundGradientFrom: '#ffffff',
            backgroundGradientTo: '#ffffff',
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '6',
              strokeWidth: '2',
              stroke: '#ffa726',
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </ScrollView>
  
          ):(
            <Text>No data available for the graph</Text>
          )}
          
          <Text style={styles.rohailShahid}>Services Pending</Text>
          {servicesData.map((service, index) => (
        <GroupComponent
          key={index} // Make sure to provide a unique key prop for each rendered component
          email={service.inputText1}
          abcgmailcom={service.inputText}
        />
      ))} 
 
          <View style={styles.extraScrollArea} /> 
        </View>
      </ScrollView>
      {/* Fixed Components */}
      <Bar />
      <Nav userid = {userId}/>
    </View>
  );
};

const styles = StyleSheet.create({
  home: {
    backgroundColor: Color.colorBlack,
    flex: 1,
    width: "100%",
    height: 812,
    paddingLeft: 10,
  },
  rohailShahid: {
    fontSize: 32,
    fontWeight: "800",
    fontFamily: FontFamily.poppinsExtraBold,
    color: Color.colorWhite,
    textAlign: "center",
    paddingLeft: 80,
    width: 288,
    height: 44,
    marginTop: 26,
  },
  img437311: {
    width: 375,
    height: 812,
    position: "absolute",
    zIndex: -1,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  scrollableContent: {
    paddingTop: 80, // Padding top equal to the height of the cover image
  },
  dashboard: {
    fontSize: FontSize.size_17xl,
    fontWeight: "800",
    fontFamily: FontFamily.poppinsExtraBold,
    color: Color.colorWhite,
    textAlign: "center",
    paddingLeft: 80,
    width: 288,
    height: 44,
    marginTop: 26,
  },
  extraScrollArea: {
    height: 100, // Adjust height for the extra scroll area
  },
});

export default Home;