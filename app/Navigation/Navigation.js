import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../features/Home';
import Search from '../features/Search';
import Camera from '../features/Camera';
import Likes from '../features/Likes';
import Account from '../features/Account';

import Icon from 'react-native-vector-icons/Ionicons';
import UserIcon from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();

const HomeStack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          activeTintColor: '#e91e63',
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (
              <Icon name="md-home-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarLabel: 'Search',
            tabBarIcon: ({color, size}) => (
              <Icon name="search-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Camera"
          component={Camera}
          options={{
            tabBarLabel: 'Camera',
            tabBarIcon: ({color, size}) => (
              <Icon name="camera-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Likes"
          component={Likes}
          options={{
            tabBarLabel: 'Likes',
            tabBarIcon: ({color, size}) => (
              <Icon name="heart-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Account"
          component={Account}
          options={{
            tabBarLabel: 'Account',
            tabBarIcon: ({color, size}) => (
              <UserIcon name="user" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
