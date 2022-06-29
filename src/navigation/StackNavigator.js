import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FeedScreen from '../screens/FeedScreen';
import ProfileScreen from '../screens/ProfileScreen';
import PostScreen from '../screens/PostScreen';
import CommentsScreen from '../screens/CommentsScreen';
import ExploreScreen from '../screens/ExploreScreen';

const Stack = createNativeStackNavigator();

export const HomeStack = () => (
  <Stack.Navigator initialRouteName="Feed">
    <Stack.Screen
      name="Photogram"
      component={FeedScreen}
      options={{
        headerTitleStyle: {
          color: '#000',
          fontWeight: 'bold',
          fontSize: 34,
        },
      }}
    />
    <Stack.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        title: 'Profile',
        headerTitleStyle: {
          color: '#000',
        },
      }}
    />
    <Stack.Screen
      name="Post"
      component={PostScreen}
      options={{
        headerTitleStyle: {
          color: '#000',
        },
      }}
    />
    <Stack.Screen
      name="Comments"
      component={CommentsScreen}
      options={{
        headerTitleStyle: {
          color: '#000',
        },
      }}
    />
  </Stack.Navigator>
);

export const ProfileStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="User"
      component={ProfileScreen}
      options={{
        title: 'Profile',
        headerTitleStyle: {
          color: '#000',
        },
      }}
    />
    <Stack.Screen
      name="Post"
      component={PostScreen}
      options={{
        headerTitleStyle: {
          color: '#000',
        },
      }}
    />
    <Stack.Screen
      name="Comments"
      component={CommentsScreen}
      options={{
        headerTitleStyle: {
          color: '#000',
        },
      }}
    />
  </Stack.Navigator>
);

export const ExploreStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Explore"
      component={ExploreScreen}
      options={{
        headerShown: false,
        headerTitleStyle: {
          color: '#000',
        },
      }}
    />
    <Stack.Screen
      name="Post"
      component={PostScreen}
      options={{
        headerTitleStyle: {
          color: '#000',
        },
      }}
    />
    <Stack.Screen
      name="Comments"
      component={CommentsScreen}
      options={{
        headerTitleStyle: {
          color: '#000',
        },
      }}
    />
  </Stack.Navigator>
);
