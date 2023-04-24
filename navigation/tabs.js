import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../screens';
import { COLORS, FONTS, SIZES } from '../constants/theme';
import icons from '../constants/icons';
import {TabIcon} from '../components';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
     screenOptions={{ headerShown: false }}//hide the header > home ,settings,search ...

      tabBarOptions={{
        showLabel: false, // activeTintColor: 'blue',
        style: {
          backgroundColor: COLORS.white,
          height: 100,
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          borderTopColor: 'transparent',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused, tintColor }) => (
            <TabIcon icon={icons.home} focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.search} />
          ),
        }}
      />
      <Tab.Screen
        name="Bookmark"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.bookmark} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.settings} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
