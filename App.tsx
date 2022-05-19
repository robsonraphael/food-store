import React from 'react';

/* Navigation */
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

/* Screens */
import Introduction from './screens/introduction/index';
import Market from './screens/market';

const Tab = createNativeStackNavigator(); 

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Introduction'>
        <Tab.Screen name="Introduction" component={Introduction}/>
        <Tab.Screen name="Market" component={Market} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}