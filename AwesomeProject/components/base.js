import React from 'react';
import {View, StyleSheet, Text, Image, TextInput} from 'react-native';
import StarRating from 'react-native-star-rating';

const ratingBoxStyle = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  desText: {
    fontSize: 13,
    color: 'black',
  },
});
function RatingBox({chosen}) {
  let description = 'Đánh giá';

  switch (chosen) {
    case 1:
      description = 'Rất Tệ';
      break;
    case 2:
      description = 'Tệ';
      break;
    case 3:
      description = 'Trung bình';
      break;
    case 4:
      description = 'Tuyệt';
      break;
    case 5:
      description = 'Rất tuyệt';
      break;
  }

  return (
    <View style={ratingBoxStyle.container}>
      <Text style={ratingBoxStyle.desText}>{description}</Text>
      <StarRating
        maxStars={5}
        starSize={25}
        rating={chosen}
        fullStarColor={'#3baaf5'}
      />
    </View>
  );
}

function Card({title, avatar, bodyComponent, rate}) {
  return (
    <View style={card.cardContainer}>
      <View style={card.cardHeader}>
        <Image
          style={[card.cardAvatar]}
          source={
            avatar == null || false
              ? {uri: 'https://bootdey.com/img/Content/avatar/avatar1.png'}
              : avatar
          }
        />
        <Text style={card.cardTitle}>
          {title == null || false ? 'Card title' : title}
        </Text>
      </View>
      <View style={card.cardBody}>
        {/* <View style={card.infoContainer}><Text style={card.infoTitle}>Email:</Text><Text></Text></View>
            <View style={card.infoContainer}><Text style={card.infoTitle}>Mật khẩu:</Text><Text></Text></View> */}
        {bodyComponent}
      </View>
      <View style={card.cardFooter}>
        {rate == null ? <View /> : <RatingBox chosen={rate} />}
      </View>
    </View>
  );
}
const card = StyleSheet.create({
  cardContainer: {
    borderTopWidth: 40,
    borderTopColor: 'red',
    backgroundColor: '#ffffff',
    padding: 5,
    margin: 5,
  },
  cardHeader: {
    flexDirection: 'row',
    marginTop: -25,
  },
  cardAvatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  cardTitle: {
    marginLeft: 5,
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'flex-end',
  },
  cardBody: {
    paddingLeft: 10,
    backgroundColor: '#ffffff',
  },
  cardFooter: {
    backgroundColor: '#fff',
  },
});

function SearchBox({onChangeText, title}) {
  return (
    <View style={searchBox.searchBoxContainer}>
      <View style={searchBox.searchBoxContent}>
        <Image
          source={{uri: 'https://img.icons8.com/ios/500/search--v1.png'}}
          style={searchBox.searchBoxIcon}
        />
        <TextInput
          placeholder={title}
          style={searchBox.searchBoxInputFiled}
          onChangeText={onChangeText}
        />
      </View>
    </View>
  );
}
const searchBox = StyleSheet.create({
  searchBoxContainer: {
    padding: 5,
    // backgroundColor:'orange'
  },
  searchBoxContent: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 50,
    height: 40,
  },
  searchBoxIcon: {
    height: 30,
    width: 30,
    borderRadius: 30,
    marginLeft: 3,
    alignSelf: 'center',
  },
  searchBoxInputFiled: {
    flex: 1,
    fontSize: 15,
  },
});

export default Card;
export {SearchBox, RatingBox};
