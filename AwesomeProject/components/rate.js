import React from 'react';
import {
  View,
  TextInput,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Rating, AirbnbRating} from 'react-native-ratings';

function Rate({route, navigation}) {
  return (
    <View style={styles.rateContainer}>
      <View style={styles.contentContainer}>
        <View style={styles.infoRow}>
          <Text style={styles.infoTitle}>Mã môn học:</Text>
          <Text style={styles.infoData}>{route.params.item.id}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoTitle}>Tên môn học:</Text>
          <Text style={styles.infoData}>{route.params.item.displayName}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoTitle}>Giảng viên:</Text>
          <Text style={styles.infoData}>{route.params.item.giangVien}</Text>
        </View>
        <View style={styles.infoRow}>
          <View style={styles.ratingContainer}>
            <Text style={styles.infoTitle}>Đánh giá của bạn:</Text>
            <AirbnbRating
              count={5}
              reviews={['Terrible', 'Bad', 'OK', 'Good', 'Great']}
              defaultRating={route.params.item.yourRate}
              size={50}
              showRating={false}
            />
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Classes');
            alert('Thank for your rating!');
          }}
          style={styles.buttonContainer}>
          <Text style={styles.buttonText}>ĐÁNH GIÁ</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  rateContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    paddingRight: 10,
    marginTop: -150,
    marginLeft: -50,
  },
  infoTitle: {
    fontSize: 25,
    fontWeight: '700',
    paddingRight: 3,
    marginRight: 10,
  },
  infoData: {
    fontSize: 25,
    fontWeight: '300',
    paddingRight: 3,
    marginRight: 10,
  },
  infoRow: {
    flexDirection: 'row',
    marginLeft: 50,
    marginBottom: 5,
  },
  buttonContainer: {
    backgroundColor: '#2980b9',
    paddingVertical: 15,
    height: 50,
    marginTop: 50,
    marginLeft: 50,
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '700',
  },
});

export default Rate;
