import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Color, FontFamily, FontSize } from '../GlobalStyles';

const ReviewPage = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { W_id } = route.params;
console.log(W_id)
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(`http://192.168.8.100:3000/Reviews/${W_id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json(); 
        setReviews(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [W_id]);

  if (loading) {
    return <Text>Loading reviews...</Text>;
  }

  if (error) {
    return <Text>Error fetching reviews: {error}</Text>;
  }

  // if (!reviews.length) {
  //   return <Text>No reviews found for W_id: {W_id}</Text>;
  // }

  return (
    <ScrollView style={styles.container}>
      {reviews.map((review, index) => (
        <View key={index} style={styles.reviewItem}>
          <Text style={styles.userName}>{review.userName}</Text>
          <Text style={styles.description}>{review.description}</Text>
          <Text style={styles.workshopName}>{review.workshopName}</Text>
        </View>
      ))}
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Go Home</Text>
      </Pressable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.colorBlack,
  },
  reviewItem: {
    borderBottomWidth: 1,
    borderBottomColor: Color.colorGrey,
    padding: 20,
    marginBottom: 10,
  },
  userName: {
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsBold,
    fontSize: FontSize.size_lg,
  },
  description: {
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_md,
    marginTop: 5,
  },
  workshopName: {
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsBold,
    fontSize: FontSize.size_md,
    marginTop: 5,
  },
  button: {
    backgroundColor: Color.colorDarkorange_100,
    padding: 10,
    alignItems: 'center',
    margin: 20,
  },
  buttonText: {
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsBold,
    fontSize: FontSize.size_md,
  },
});

export default ReviewPage;
