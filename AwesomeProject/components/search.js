import React from 'react';
import {View, TextInput, Image, StyleSheet} from 'react-native';

function SearchBar() {
  return (
    <View style={styles.SearchBarContainer}>
      <View style={styles.searchBarContent}>
        <Image
          source={{uri: 'https://img.icons8.com/ios/500/search--v1.png'}}
          style={styles.searchIcon}
        />
        <TextInput placeholder="Tìm kiếm...." style={styles.inputFiled} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  SearchBarContainer: {
    padding: 5,
    backgroundColor: 'orange',
  },
  searchBarContent: {
    padding: 0,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 50,
    height: 40,
  },
  searchIcon: {
    height: 30,
    width: 30,
    borderRadius: 30,
    marginLeft: 3,
    alignSelf: 'center',
  },
  inputFiled: {
    flex: 1,
    fontSize: 15,
  },
});

export {SearchBar};
