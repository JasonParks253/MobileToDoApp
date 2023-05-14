import { StyleSheet, Text, View } from 'react-native';
import Display from './components/displayTask';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Details } from './screens/selectTaskScreen';
import { HomeScreen } from './screens/homeScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Tab.Navigator initialRouteName='Home' swipeEnabled style={{backgroundColor: 'blue'}}>
        <Tab.Screen name='Create Task' component={Display} />
        <Tab.Screen name='Home' component={HomeScreen} />
        <Tab.Screen name="Details" component={Details} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'tan',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabBar: {
    activeTintColor: '#FFC300',

  }
});
