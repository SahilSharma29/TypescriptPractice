import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import {HomeStackNavigatorParamList} from './types';

const HomeStackNavigator = () => {
  const HomeStack = createNativeStackNavigator<HomeStackNavigatorParamList>();

  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Details" component={DetailScreen} />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;
