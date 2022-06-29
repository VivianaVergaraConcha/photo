import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './src/navigation/TabNavigator';

import ProfileContextProvider from './src/context/ProfileContext';
import PostContextProvider from './src/context/PostContext';

const App = () => {
  return (
    <ProfileContextProvider>
      <PostContextProvider>
        <NavigationContainer>
          <TabNavigator />
        </NavigationContainer>
      </PostContextProvider>
    </ProfileContextProvider>
  );
};

export default App;
