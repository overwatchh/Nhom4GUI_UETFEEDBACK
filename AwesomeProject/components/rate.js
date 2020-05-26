import React from 'react';
import {
  View,
  TextInput,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';
import {Rating, AirbnbRating} from 'react-native-ratings';
import {AutoGrowingTextInput} from 'react-native-autogrow-textinput';

const styles = StyleSheet.create({
  rateContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    paddingRight: 10,
    marginLeft: -50,
  },
  infoHeader: {
    fontSize: 35,
    fontWeight: '700',
    paddingRight: 3,
    marginRight: 10,
  },
  infoTitle: {
    fontSize: 25,
    fontWeight: '700',
    paddingRight: 3,
    marginRight: 10,
    marginLeft: '10%',
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
    textAlign: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    backgroundColor: '#2980b9',
    paddingVertical: 15,
    height: 50,
    marginLeft: 50,
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '700',
  },
  input: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    borderWidth: 3,
    borderColor: 'green',
    width: '85%',
    borderRadius: 10,
    padding: 20,
    fontSize: 18,
    // height: Math.max(35, this.getState('height')),
  },
  starRate: {
    marginLeft: '10%',
  },
  commentButton: {
    alignSelf: 'flex-end',
  },
  commentText: {
    color: 'green',
  },
  ratingContainer: {
    flex: 1,
    marginLeft: 0,
  },
});

export default class Rate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ratingValue: props.route.params.item.rateAverage,
      comment: '',
      height: 0,
    };
  }

  ratingCompleted = rating => {
    this.setState({
      ratingValue: rating,
    });
  };

  rate = async (id, value, comment) => {
    const username = await AsyncStorage.getItem('username');
    const name = await AsyncStorage.getItem('name');
    const avatarUrl = await AsyncStorage.getItem('avatarUrl');
    try {
      let response = await fetch(
        'https://uet-feedback-api.herokuapp.com/comments',
        {
          method: 'post',
          mode: 'no-cors',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            uetClassId: id,
            content: comment,
            username: username,
            ratingValue: value,
            name: name,
            avatarUrl: avatarUrl,
          }),
        },
      );
      let statusCode = response.status;
      let responseJson = await response.json();
    } catch (e) {}
    this.props.navigation.navigate('Classes');
  };

  render() {
    const {item} = this.props.route.params;
    const {comment} = this.state;

    return (
      <View style={styles.rateContainer}>
        <View style={styles.contentContainer}>
          <View style={styles.infoRow}>
            <Text style={styles.infoHeader}>ĐÁNH GIÁ MÔN HỌC</Text>
          </View>
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
              <View style={styles.starRate}>
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
          </View>
          <View style={{textAlign: 'right'}}>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('Comment', {item: item})
              }
              style={styles.commentButton}>
              <Text style={styles.commentText}>Xem đánh giá</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.infoRow}>
            <AutoGrowingTextInput
              placeholder="Thêm nhận xét..."
              onChangeText={data => {
                this.setState({
                  comment: data,
                });
              }}
              value={comment}
              multiline={true}
              style={styles.input}
            />
          </View>
          <TouchableOpacity
            onPress={() =>
              this.rate(item.id, this.state.ratingValue, this.state.comment)
            }
            style={styles.buttonContainer}>
            <Text style={styles.buttonText}>ĐÁNH GIÁ</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
