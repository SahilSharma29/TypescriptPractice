import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import type {
  RouteProp,
  CompositeNavigationProp,
} from '@react-navigation/native';

export type HomeStackNavigatorParamList = {
  Home: undefined;
  Details: {
    name: string;
    birthYear: string;
  };
};

export type HomeScreenNavigationProp = CompositeNavigationProp<
  NativeStackNavigationProp<HomeStackNavigatorParamList, 'Details'>,
  BottomTabNavigationProp<BottomTabNavigatorParamList, 'Feed'>
>;
export type DetailsScreenRouteProp = RouteProp<
  HomeStackNavigatorParamList,
  'Details'
>;

export type BottomTabNavigatorParamList = {
  Home: HomeStackNavigatorParamList;
  Feed: 'string';
  Settings: undefined;
};
