import { StyleSheet } from 'react-native';
import Display from './components/displayTask';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Details } from './screens/selectTaskScreen';
import { HomeScreen } from './screens/homeScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Tab.Navigator 
        initialRouteName='Home' 
        screenOptions={{ 
          tabBarActiveTintColor: 'orange',
        }}
      >
        <Tab.Screen 
          name='Create Task' 
          component={Display} 
          options={{  tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons 
                name="plus" 
                color={color} 
                size={size} 
              />
            ), 
          }}
        />
        <Tab.Screen 
          name='Home' 
          component={HomeScreen} 
          options={{tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons 
                name="home" 
                color={color} 
                size={size} 
              />
            ),
          }}
        />
        <Tab.Screen 
          name="Details" 
          component={Details} 
          options={{ tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons 
                name="menu" 
                color={color} 
                size={size} 
              />
            ), 
          }}
        />
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
  tabBarOptions: {
    activeTintColor: '#e91e63',
    labelStyle: {
      fontSize: 15,
    },
    style: {
      backgroundColor: 'red',
    },
  }
});
