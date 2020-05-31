import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  AsyncStorage,
  Dimensions,
  Animated,
  ImageBackground,
} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import {Icon} from 'react-native-elements';
import BottomNavigation, {
  FullTab,
} from 'react-native-material-bottom-navigation';
import {useNavigation} from '@react-navigation/native';
import * as RootNavigation from '../navigation/RootNavigation';

const styles = StyleSheet.create({});

let label = '';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  tabs = [
    {
      key: 'home',
      icon: 'home',
      label: 'Trang chủ',
      barColor: '#3498db',
      pressColor: 'rgba(255, 255, 255, 0.16)',
    },
    {
      key: 'info',
      icon: 'info',
      label: 'Người dùng',
      barColor: '#3498db',
      pressColor: 'rgba(255, 255, 255, 0.16)',
    },
    {
      key: 'settings',
      icon: 'settings',
      label: 'Cài đặt',
      barColor: '#3498db',
      pressColor: 'rgba(255, 255, 255, 0.16)',
    },
    {
      key: 'login',
      icon: 'contacts',
      label: 'Tài khoản',
      barColor: '#3498db',
      pressColor: 'rgba(255, 255, 255, 0.16)',
    },
  ];

  state = {
    activeTab: 'games',
  };

  renderIcon = icon => ({isActive}) => (
    <Icon size={24} color="white" name={icon} />
  );

  renderTab = ({tab, isActive}) => (
    <FullTab
      isActive={isActive}
      key={tab.key}
      label={tab.label}
      renderIcon={this.renderIcon(tab.icon)}
    />
  );

  clickTab = async newTab => {
    let username = await AsyncStorage.getItem('username');
    this.setState({activeTab: newTab.key});
    if (newTab.key === 'home') {
      RootNavigation.navigate('Trang chủ');
    } else if (newTab.key === 'login') {
      await AsyncStorage.setItem('username', '');
      RootNavigation.navigate('Đăng nhập');
    } else if (newTab.key === 'info') {
      RootNavigation.navigate('Tài khoản');
    } else if (newTab.key === 'settings') {
      RootNavigation.navigate('Cài đặt');
    }
  };

  render() {
    return (
      <BottomNavigation
        activeTab={this.state.activeTab}
        onTabPress={newTab => this.clickTab(newTab)}
        renderTab={this.renderTab}
        tabs={this.tabs}
      />
    );
  }
}
