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

export default class Rate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ratingValue: props.route.params.item.rateAverage,
    };
  }

  ratingCompleted = rating => {
    this.setState({
      ratingValue: rating,
    });
  };

  render() {
    const {item} = this.props.route.params;

    return (
      <View style={styles.rateContainer}>
        <View style={styles.contentContainer}>
          <View style={styles.infoRow}>
            <Text style={styles.infoTitle}>Mã môn học:</Text>
            <Text style={styles.infoData}>{item.id}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoTitle}>Tên môn học:</Text>
            <Text style={styles.infoData}>{item.displayName}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoTitle}>Giảng viên:</Text>
            <Text style={styles.infoData}>{item.giangVien}</Text>
          </View>
          <View style={styles.infoRow}>
            <View style={styles.ratingContainer}>
              <Text style={styles.infoTitle}>Đánh giá của bạn:</Text>
              <AirbnbRating
                count={5}
                reviews={['Terrible', 'Bad', 'OK', 'Good', 'Great']}
                defaultRating={item.rateAverage}
                onFinishRating={this.ratingCompleted}
                size={50}
                showRating={false}
              />
            </View>
          </View>
          <TouchableOpacity
            onPress={async () => {
              try {
                let response = await fetch(
                  'https://uet-feedback-api.herokuapp.com/uetClasses/rate',
                  {
                    method: 'post',
                    mode: 'no-cors',
                    headers: {
                      Accept: 'application/json',
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                      uetClassId: item.id,
                      value: this.state.ratingValue,
                    }),
                  },
                );
                let statusCode = response.status;
                let responseJson = await response.json();
                if (statusCode === 200) {
                  this.props.navigation.navigate('Classes');
                } else {
                  alert('Username or Password is invalid');
                }
              } catch (e) {
                alert('Username or Password is invalid');
              }
            }}
            style={styles.buttonContainer}>
            <Text style={styles.buttonText}>ĐÁNH GIÁ</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
